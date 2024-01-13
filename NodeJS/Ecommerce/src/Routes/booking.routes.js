const { createBooking, getAllBookings } = require("../Controllers/booking.controller")
const { verifyToken } = require("../Middlewares/authJWT")


module.exports = function(app){


    app.post("/mba/api/v1/bookings",[verifyToken], createBooking);
    app.get("/mba/api/v1/bookings",[verifyToken], getAllBookings);




}