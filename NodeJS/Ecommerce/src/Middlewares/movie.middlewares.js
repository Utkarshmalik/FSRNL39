

const validateCreateMovieRequest = (req,res,next)=>{
    
    

    if(!req.body.name){
        return res.status(400).send({message:"Failed! Movie name is not provided"})
    }

    if(!req.body.releaseStatus){
        return res.status(400).send({message:"ReleaseStatus is not provided"});
    }


    next();

}

module.exports = {
    validateCreateMovieRequest
}