const BookingModel = require("../Models/booking.model");



exports.createBooking = async (req,res)=>{

    const {movieId, theatreId, timings,noOfSeats} = req.body;

    const bookingObj = {

        theatreId,
        movieId,
        userId:req.user._id,
        timings,
        noOfSeats,
        totalCost:noOfSeats * 800
    }

    try{
        const booking = await BookingModel.create(bookingObj);

        return res.status(201).send(booking);

    }
    catch(err){

        return res.status(500).send({message:"Internal Server Error"});
    }

}

exports.getAllBookings = async (req,res)=>{
    try{
        const bookings = await BookingModel.find({}).populate("movieId").populate("theatreId").populate("userId");

        return res.status(200).send(bookings);

    }
    catch(err){

        return res.status(500).send({message:"Internal Server Error"});
    }

}