const PORT =        process.env.PORT || 3500
const index =       require("./bot/index")
const app = require("./routes/app.js")


app.listen(PORT, function(){
    console.log(`server is now running on ${PORT}`)
})
