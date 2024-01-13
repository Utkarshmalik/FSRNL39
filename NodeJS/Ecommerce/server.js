
const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
require("dotenv").config();
var cors = require('cors')
const ProductRoutes = require("./src/Routes/Product.routes");
const authRoutes = require("./src/Routes/auth.routes");
const movieRoutes = require("./src/Routes/movie.routes");
const { PORT } = require("./configs/server.config");
const { DB_URL } = require("./configs/db.config");
const theatreRoutes = require("./src/Routes/theatre.routes");
const bookingRoutes = require("./src/Routes/booking.routes");
const paymentRoutes = require("./src/Routes/payment.routes");



mongoose.connect(DB_URL)
.then(()=>{
    console.log("Successfully connected to the database");
})
.catch((err)=>{
    console.log("Couldn't connect to the databse",err.message);
})

const app = express();

app.use(cors());


// create application/json parser
app.use(bodyParser.json())


ProductRoutes(app);
authRoutes(app);
movieRoutes(app);
theatreRoutes(app);
bookingRoutes(app);
paymentRoutes(app);


app.listen(PORT, ()=>{
    console.log("Your application is running on port 3000");
})