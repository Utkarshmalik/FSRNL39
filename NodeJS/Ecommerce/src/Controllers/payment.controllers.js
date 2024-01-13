const BookingModel = require("../Models/booking.model");
const PaymentModel = require("../Models/payment.model");
const { paymentStatus, bookingStatus } = require("../utils/constants");


exports.createPayment = async (req,res)=>{

    const {bookingId, status, amount} = req.body;

    const savedBooking = await BookingModel.findById(bookingId);


    try{
        const payment = await PaymentModel.create(req.body);

        if(payment.status ===paymentStatus.success){
            savedBooking.status = bookingStatus.completed;

            await savedBooking.save();
        }

        return res.status(200).send({message:"Payment Successful"});
    }
    catch(err){

        return res.status(500).send({message:"Internal Server Error"});
    }
    


}

