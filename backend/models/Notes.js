



const mongoose = require("mongoose")


const NotesSchema = new mongoose.Schema({         //  a schema is defined.......

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },

    title : {
        type : String,
        required : true,
    },


    description : {
        type : String,
    },


    tag : {
        type : String,
        default : "General",
    },


    date : {
        type : Date,
        default : Date.now,
    },

}, {                                         //  built-in data fields.....
    versionKey : false,
})




module.exports = mongoose.model("Notes", NotesSchema)





