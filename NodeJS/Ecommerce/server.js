
const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require("mongoose");


const dbUrl = "mongodb+srv://utmalik:qwerty123@cluster0.85op4lq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbUrl)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the databse",err.message);
})



var {productsData} =  require("./data");
const app = express();

// create application/json parser
app.use(bodyParser.json())


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



//create a new Product 

app.post("/products",async (req,res)=>{

    const {price,name,description,category}  = req.body;

    if(!price || price<0){
        return res.status(400).send({message:"Price cannot be NULL or Negative in nature"});
    }

    if(!name){
        return res.status(400).send({message:"Name of the product cannot be empty"});
    }

    const productData = {
        price,
        name,
        description,
        category
    }

    const newProduct = new Product(productData);

    try{
        const response = await newProduct.save();
        return res.status(201).send(response);

    }catch(err){

        return res.status(500).send({message:"Internal Server Error"});
    }
})


//get all the products 

// Product with a particular category 
// Product in a given price range 
// Product with a particular category in a given price range 


app.get("/products", async (req,res)=>{

    const {maxPrice, category} = req.query;

    const query={};

    if(category){
        query.category=category;
    }

    if(maxPrice){
        query.price = {
            $lte:maxPrice
        }
    }

    try{

        const products = await Product.find(query);
        return res.status(200).send(products);
    }
    catch(err){
        res.status(500).send({message:"Internal Server Error"});
    }

})

//get a product via particular Id 

app.get("/products/:id", async (req,res)=>{

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"Invalid Object Id is passed"});
    }

    try{
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).send({message:"Product not found"});
        }

        return res.status(200).send(product);
    }
    catch(err){
        res.status(500).send({message:"Internal Server Error"});
    }
})


//update a product via particular Id 

app.put("/products/:id", async (req,res)=>{

    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"Invalid Object Id is passed"});
    }

    const updatedDetails = req.body;

    try{
        const response = await Product.findByIdAndUpdate(id,updatedDetails,{
            new:true
        });

         if(!response){
            return res.status(404).send({message:"Product not found"});
        }

        return res.status(200).send(response);

    }
    catch(err){
        res.status(500).send({message:"Internal Server Error"});
    }
})



app.delete("/products/:id", async (req,res)=>{

      const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message:"Invalid Object Id is passed"});
    }

    try{
        const response = await Product.findByIdAndDelete(id);

       if(!response){
            return res.status(404).send({message:"Product not found"});
        }

        return res.status(200).send({message:"Product Deleted Successfully"});
    }
    catch(err){
        res.status(500).send({message:"Internal Server Error"});
    }

})




app.listen(3000, ()=>{
    console.log("Your application is running on port 3000");
})