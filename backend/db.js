



const mongoose = require("mongoose")

const mongo_URI = "mongodb://localhost:27017/inotebook"               //  database connection string..........


const connectToMongo = () => {
    mongoose.connect(mongo_URI)                  //  connecting with mongodb database.....
    const db = mongoose.connection                      //  now, object db will wait for the connection event....


    db.once("open", () => {                                   //  executes the callback if the connection event gives "open".
        console.log("YaY!!!, Successfully connected to mongoDB.")
    })


    db.on("error", () => {                                   //  executes the callback if the connection event gives "error".
        console.log("Error while connecting to mongoDB.")
    })
}



module.exports = connectToMongo




