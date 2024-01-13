const Movie = require("../Models/movie.model");
const theatreModel = require("../Models/theatre.model");


exports.createTheatre = async (req,res)=>{
    

    try{

        const theatre = await theatreModel.create(req.body);

        return res.status(201).send(theatre);

    }catch(err){

        return res.status(500).send({message:err.message});
    }


}


exports.getAllTheatres = async (req,res)=>{

     try{

        const theatres = await theatreModel.find({});

        return res.status(200).send(theatres);

    }catch(err){

        return res.status(500).send({message:err.message});
    }



}

exports.getTheatreById = async (req,res)=>{

    const id = req.params.id;


      try{

        const theatre = await theatreModel.findById(id).populate("movies");

        return res.status(200).send(theatre);

    }catch(err){

        return res.status(500).send({message:err.message});
    }


}

exports.addMovieToATheatre  = async (req,res)=>{

    const {theatreId, movieId} = req.params;

    const [savedTheatre, savedMovie] =  await Promise.all([theatreModel.findById(theatreId),Movie.findById(movieId)]);


    if(!savedTheatre){
        return res.status(400).send({message:"Theatre doesn't exisits "});
    }

      if(!savedMovie){
        return res.status(400).send({message:"Movie doesn't exisits "});
    }

    savedTheatre.movies.push(movieId);

    await savedTheatre.save();


    return res.status(200).send({message:"Movie Added Successfully"});
}


exports.checkIfMovieRunningInGivenTheatre = async (req,res)=>{


     const {theatreId, movieId} = req.params;

    const [savedTheatre, savedMovie] =  await Promise.all([theatreModel.findById(theatreId),Movie.findById(movieId)]);


    if(!savedTheatre){
        return res.status(400).send({message:"Theatre doesn't exisits "});
    }

      if(!savedMovie){
        return res.status(400).send({message:"Movie doesn't exisits "});
    }

    const response = {
        isRunning : savedTheatre.movies.includes(movieId)
    }


    res.status(200).send(response);


}