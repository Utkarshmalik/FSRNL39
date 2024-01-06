
const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const ProductRoutes = require("./src/Routes/Product.routes");
const authRoutes = require("./src/Routes/auth.routes");
const movieRoutes = require("./src/Routes/movie.routes");

const dbUrl = "mongodb+srv://utmalik:qwerty123@cluster0.85op4lq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbUrl)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the databse",err.message);
})

const app = express();

// create application/json parser
app.use(bodyParser.json())


ProductRoutes(app);
authRoutes(app);
movieRoutes(app);


app.listen(3000, ()=>{
    console.log("Your application is running on port 3000");
})