const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        requried:true
    },
    category:{
        type:String,
        required:true,
        enum:["Electronics","Fashion","Jewellery"]
    },
    price:{
        type:Number,
        requried:true
    }
})


const Product = mongoose.model("Product_FS39",ProductSchema);


module.exports = Product;
