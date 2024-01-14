const BookingModel = require("../Models/booking.model");
const PaymentModel = require("../Models/payment.model");
const { bookingSuccess } = require("../scripts/email.scripts");
const { sendEmail } = require("../utils/NotificationUtils");
const { paymentStatus, bookingStatus } = require("../utils/constants");


exports.createPayment = async (req,res)=>{

    const {bookingId, status, amount} = req.body;

    const savedBooking = await BookingModel.findById(bookingId);


    try{
        const payment = await PaymentModel.create(req.body);

        if(payment.status ===paymentStatus.success){
            savedBooking.status = bookingStatus.completed;

            await savedBooking.save();

            //send a confirmation email

            const {html,text,subject} = bookingSuccess(req.user,savedBooking);

            sendEmail([req.user.email], subject,html,text);
        }






        return res.status(200).send({message:"Payment Successful"});
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error"+err.message});
    }
    


}

