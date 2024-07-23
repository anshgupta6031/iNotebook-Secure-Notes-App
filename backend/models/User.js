



const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({         //  a schema is defined.......
    name : {
        type : String,
        required : true,
    },


    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
    },


    password : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 5,
    },


    date : {
        type : Date,
        default : Date.now,
    },

}, {                                         //  built-in data fields.....
    versionKey : false,
})




module.exports = mongoose.model("Users", UserSchema)





