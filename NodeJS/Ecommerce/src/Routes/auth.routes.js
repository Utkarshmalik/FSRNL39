const { signup, signIn } = require("../Controllers/auth.controllers");
const { verifySignUpRequest, verifySignInRequest } = require("../Middlewares/auth.middlewares");



module.exports = (app)=>{

    app.post("/mba/api/v1/auth/signup",[verifySignUpRequest] ,signup);
    app.post("/mba/api/v1/auth/signin",[verifySignInRequest] ,signIn);


}