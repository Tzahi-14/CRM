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
    let getClients = await sequelize.query(`SELECT client.id,client.name AS client_name,email,firstContact,type,sold,owner.name AS owner_name,country.name AS country_name
    from client,email_type,owner,country
    WHERE client.email_type = email_type.id AND client.owner=owner.id AND client.country=country.id
    ORDER BY client.id`)
    res.send(getClients)
})

router.post("/client", async function (req, res) {
    let clientData = {
        name: req.body.firstName + " " + req.body.lastName,
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
    const addClient = await sequelize.query(`INSERT INTO client VALUES(null,'${clientData.name}','${clientData.email}','${clientData.firstContact}',${clientData.sold},${getEmailId},${getOwnerId},${getCountryId})`)

    res.send(addClient)
})

router.put("/client/:clientId", async function(req,res){
    const clientId = req.params.clientId
    const ownerName = req.body.ownerName
    const getOwnerId = await ownerId(ownerName)
    const updateOwner = await sequelize.query(`UPDATE client SET owner = ${getOwnerId} WHERE id=${clientId}`)
    res.send(updateOwner)
})


module.exports = router
