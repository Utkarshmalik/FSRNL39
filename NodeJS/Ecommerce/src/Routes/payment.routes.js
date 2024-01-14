const { createPayment } = require("../Controllers/payment.controllers")
const { verifyToken } = require("../Middlewares/authJWT")

module.exports = (app)=>{

    app.post("/mba/api/v1/payments",[verifyToken],createPayment)

}