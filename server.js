const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'urls'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/:smolURL',(request, response)=>{
    const smolURL = request.params.smolURL
    console.log(smolURL)
    db.collection('urls').find({smolExtenstion: smolURL}).toArray()
    .then(data => {
        console.log(data[0].URL)
        response.redirect(`${data[0].URL}`)
    })
    .catch(error => console.error(error))
})

let currentSmolsKey = ''
let nextSmolsKey = 'a'

function updateKey(oldKey){
    let nextLetter
    if(oldKey.slice(-1) === 'z' && oldKey.slice(-2, -1) === 'z'){
        nextLetter = oldKey + 'a'
    }
    else if(oldKey.slice(-1) === 'z' && oldKey.slice(-2) !== 'z'){
        nextLetter = oldKey.slice(0, -2) + String.fromCharCode(
            (oldKey.charCodeAt(oldKey.length - 2) + 1)) + 'a'
    }
    else if(oldKey.length === 1 && oldKey === 'z'){
        nextLetter = 'za'
    }
    else{
        nextLetter = oldKey.slice(0, -1) + String.fromCharCode(
            (oldKey.charCodeAt(oldKey.length - 1)) + 1)
    }
    return nextLetter
}

app.post('/new', (request, response) => {
    console.log(request.body)
    currentSmolsKey = nextSmolsKey
    nextSmolsKey = updateKey(currentSmolsKey)
    console.log(`smols requested for ${request.body.url}`)
    db.collection('urls').insertOne({URL: request.body.url,
        smolExtenstion: currentSmolsKey
    })
    .then(result => {
        console.log('URL smoled')
        console.log(result)
        const doc = result.ops;
        response.json(`${currentSmolsKey}`)
    })
    .catch(error => console.error(error))
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})