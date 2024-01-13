
const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({

    name:{
        type:String,
        requried:true
    },
    description:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:String,
        required:true
    },
    movies:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref:'Movie_FS39'
    }

})

module.exports = mongoose.model("Theatre_FS39",theatreSchema);