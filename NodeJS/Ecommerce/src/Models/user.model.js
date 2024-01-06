const { default: mongoose } = require("mongoose");
const { userTypes, userStatus } = require("../utils/constants");


const userSchema  = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        minLength:4,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    userType:{
        type:String,
        required:true,
        enum:Object.values(userTypes),
        default:userTypes.CUSTOMER
    },
    userStatus:{
        type:String,
        required:true,
        enum:Object.values(userStatus),
        default:userStatus.PENDING

    }

})

const User = mongoose.model("user_FS39",userSchema);

module.exports = User;