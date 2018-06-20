const express =     require("express")
const bodyParser =  require("body-parser");
const app =     express()
const data =    require('../db/data.json')
const request =  require('request')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// general api handling
const main =        express.Router()
require("./main")(main);

app.get('/', main)

// testing to make contact with apimachine
// test is successful... huge data object is logged in response
// when apimachine and micromachine is running
let url = 'http://localhost:3100/api/ibm'

request.post(url, function(error, response, body){
    if(error){
        console.log(error)
    } else {
        console.log(body)
    }
})



module.exports = app