

const validateCreateTheatreRequest =  (req,res,next)=>{

    if(!req.body.name){
        return res.status(400).send({message:"Failed! Theatre name is not provided"});
    }

    next();
}

module.exports = {
    validateCreateTheatreRequest
}