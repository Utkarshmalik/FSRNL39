const { createPayment } = require("../Controllers/payment.controllers")

module.exports = (app)=>{

    app.post("/mba/api/v1/payments",[],createPayment)

}