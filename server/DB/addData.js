const Sequelize = require ('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')
const data = require ('../../src/data.json')

const addEmailType = async function(array){
    const obj ={}
    array.forEach(i => {
        if (!i.emailType) {i.emailType = "no_type"}
        if(!obj[i.emailType]){
            obj[i.emailType] = i.emailType
        }
    })
    const emailTypesArr = Object.keys(obj)
    for(let i=0; i<=emailTypesArr.length-1;i++){
        let emailType = await sequelize.query(`INSERT INTO email_type VALUES(null,'${emailTypesArr[i]}')`)
        console.log(emailType)
    }
}

// addEmailType(data)

const addOwner = async function(array){
    const obj = {}
    array.forEach(i=>{
        if(!obj[i.owner]){
            obj[i.owner]=i.owner
        }
    })
    const ownerArr = Object.keys(obj)
    for(let i=0;i<=ownerArr.length -1 ; i++){
        let ownerNames = await sequelize.query(`INSERT INTO owner VALUES(null,'${ownerArr[i]}')`)
        console.log(ownerNames)
    }
}

// addOwner(data)

const addCountry = async function(array){
    const obj = {}
    array.forEach(i => {
        if(!obj[i.country]){
            obj[i.country]=i.country
        }
    });
    const countryArr = Object.keys(obj)
    for(let i=0; i<=countryArr.length-1;i++){
        let countryNames = await sequelize.query(`INSERT INTO country VALUES(null,'${countryArr[i]}')`)
        console.log(countryNames)
    }
}

// addCountry(data)

const addClients =async function(array){
    const email_type = await sequelize.query(`SELECT * FROM email_type`)
    const owner  = await sequelize.query(`SELECT * FROM owner`)
    const country  = await sequelize.query(`SELECT * FROM country`)

    let newArr = [...array]
    newArr.forEach(client => {
        email_type[0].forEach(e =>{
            if (!client.emailType) {client.emailType = "no_type"}
            if(e.type===client.emailType){
                client.emailType= e.id
            }
        })
        owner[0].forEach(o=>{
            if(o.name===client.owner){
                client.owner= o.id
            }
        })
        country[0].forEach(c=>{
            if(client.country===c.name){
                client.country= c.id
            }
        })
    })
    for (let i=0; i<=newArr.length-1;i++){
        let clientData= await sequelize.query(`INSERT INTO client VALUES(null,'${newArr[i].name}','${newArr[i].email}','${newArr[i].firstContact.replace('T', ' ').replace('Z', '')}',${newArr[i].emailType},${newArr[i].sold},${newArr[i].owner},${newArr[i].country})`)
        console.log(clientData)
    }
    
}

// addClients(data)