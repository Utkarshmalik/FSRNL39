
const express = require("express");
var bodyParser = require('body-parser')

var {productsData} =  require("./data");
const app = express();

// create application/json parser
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    return res.send("We are learning NodeJS today");
})

app.get("/products",(req,res)=>{
    return res.status(200).send(productsData)
})


app.get("/products/:id",(req,res)=>{

    const productId = req.params.id;

    const product = productsData.find((product)=>product.id == productId);

    if(!product){
        return res.status(404).send({message:"Product Not Found"});
    }

    return res.status(200).send(product);
})

app.post("/products",(req,res)=>{

    const newProduct = req.body;

    newProduct.id =  Math.floor(Math.random()*100).toString();

    productsData.push(newProduct);

    return res.status(201).send({message:"Product Created Successfully"});
})


app.put("/products/:id",(req,res)=>{

      const productId = req.params.id;

    const product = productsData.find((product)=>product.id == productId);

    if(!product){
        return res.status(404).send({message:"Product Not Found"});
    }

    const updatedValues = req.body;

    Object.keys(updatedValues).forEach((key)=>{
        product[key] = updatedValues[key]
    })

    return res.status(200).send(product);
})


app.delete("/products/:id",(req,res)=>{

     const productId = req.params.id;

    const product = productsData.find((product)=>product.id == productId);

    if(!product){
        return res.status(404).send({message:"Product Not Found"});
    }

    productsData  = productsData.filter((product)=>{
        return product.id != productId
    })

    return res.status(200).send({message:`Product with id:${productId} deleted successfully`});

})


app.listen(3000, ()=>{
    console.log("Your application is running on port 3000");
})