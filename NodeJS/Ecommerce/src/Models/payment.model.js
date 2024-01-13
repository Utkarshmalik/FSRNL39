

const mongoose = require("mongoose");
const { paymentStatus } = require("../utils/constants");


const paymentSchema = new mongoose.Schema({

    bookingId:{
        type:mongoose.SchemaTypes.ObjectId,
        requried:true,
        ref:"Booking_FS39"

    },
    amount:{
        type:Number,
        required:true

    },
    status:{
        type:String,
        enum:Object.values(paymentStatus),
        default:paymentStatus.pending
    }

})


const PaymentModel = mongoose.model("Payment_FS39",paymentSchema);

module.exports= PaymentModel;