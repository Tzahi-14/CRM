const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')

const ownerId = async function(ownerName){
    let addOwnerId = await sequelize.query(`SELECT * FROM owner where name='${ownerName}'`)
    if (!addOwnerId[0].length) {
        addOwnerId = await sequelize.query(`INSERT INTO owner VALUES(null,'${ownerName}')`)
        addOwnerId = addOwnerId[0]
    }
    else {
        addOwnerId = addOwnerId[0][0].id
        console.log("id exist")
    }
    console.log(addOwnerId)
    return addOwnerId
}
const countryId = async function(countryName){
    let addCountryId = await sequelize.query(`SELECT * FROM country where name='${countryName}'`)
    if (!addCountryId[0].length) {
        addCountryId = await sequelize.query(`INSERT INTO country VALUES(null,'${countryName}')`)
        addCountryId = addCountryId[0]
    }
    else {
        addCountryId = addCountryId[0][0].id
        console.log("id exist")
    }
    console.log(addCountryId)
    return addCountryId
}

const emailId = async function(emailType){
    let addEmailId = await sequelize.query(`SELECT * FROM email_type where type='${emailType}'`)
    if (!addEmailId[0].length) {
        addEmailId = await sequelize.query(`INSERT INTO email_type VALUES(null,'${emailType}')`)
        addEmailId = addEmailId[0]
    }
    else {
        addEmailId = addEmailId[0][0].id
        console.log("id exist")

    }
    console.log(addEmailId)
    return addEmailId
}

router.get("/clients", async function (req, res) {
    const getClients = await sequelize.query(`SELECT client.id,firstName,lastName,email,firstContact,type,sold,owner.name AS owner,country.name AS country
    from client,email_type,owner,country
    WHERE client.email_type = email_type.id AND client.owner=owner.id AND client.country=country.id
    ORDER BY client.id`)
    res.send(getClients)
})

router.put("/clientUpdate/:clientId",async function(req,res){
    const clientId = req.params.clientId
    const firstName = req.body.firstName  
    const lastName = req.body.lastName 
    const country = await countryId(req.body.country)
    const update = await sequelize.query(`UPDATE client SET firstName = '${firstName}',lastName = '${lastName}',country=${country} WHERE id=${clientId}`)
    res.send(update)
})

router.post("/client", async function (req, res) {
    const clientData = {
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.firstName + req.body.lastName + "@imant.com",
        firstContact: new Date().toISOString().slice(0, 19).replace('T', ' '),
        sold: 0,
        emailType: "no_type",
        owner: req.body.owner,
        country: req.body.country
    }
    const getOwnerId = await ownerId(req.body.owner)
    const getCountryId = await countryId(req.body.country)
    const getEmailId = await emailId(clientData.emailType)
    const addClient = await sequelize.query(`INSERT INTO client VALUES(null,'${clientData.firstName}','${clientData.lastName}','${clientData.email}','${clientData.firstContact}',${clientData.sold},${getEmailId},${getOwnerId},${getCountryId})`)

    res.send(addClient)
})

router.put("/owner/:clientId", async function(req,res){
    const clientId = req.params.clientId
    const ownerName = req.body.ownerName
    const getOwnerId = await ownerId(ownerName)
    const updateOwner = await sequelize.query(`UPDATE client SET owner = ${getOwnerId} WHERE id=${clientId}`)
    res.send(updateOwner)
})

router.put("/emailType/:clientId", async function(req,res){
    const clientId = req.params.clientId
    const emailType = req.body.emailType
    const getEmailId = await emailId(emailType)
    const changeEmailType = await sequelize.query(`UPDATE client SET email_type = ${getEmailId} WHERE id=${clientId}` )
    res.send(changeEmailType)
})

router.put("/sale/:clientId",async function(req,res){
    const clientId = req.params.clientId
    const decleareSale = await sequelize.query(`UPDATE client SET sold=1 WHERE id=${clientId}`)
    res.send(decleareSale)
})

router.get("/hottestCountry",async function(req,res){
    const getHottest = await sequelize.query(`SELECT COUNT (*),country.name AS country_name
    FROM client, country
    WHERE client.country = country.id AND sold = 1
    GROUP BY country.name`)
    res.send(getHottest)
})

router.get("/topEmployees",async function(req,res){
    const gettopEmployees = await sequelize.query(`SELECT COUNT(*), owner.name AS emoployee_name
    FROM client, owner
    WHERE client.owner = owner.id AND sold =1
    GROUP BY owner.name `)
    res.send(gettopEmployees)
})


module.exports = router
