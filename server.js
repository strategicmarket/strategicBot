const express =     require("express")
const bodyParser =  require("body-parser");
const PORT =        process.env.PORT || 3500
const index =       require("./bot/index")
const app =         express()

// general api handling
const main =        express.Router()
require("./routes/main")(main);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// call main.js for display 
app.get('/', main)

// call slack bot for use 
app.use(index);

app.listen(PORT, function(){
    console.log(`server is now running on ${PORT}`)
})
