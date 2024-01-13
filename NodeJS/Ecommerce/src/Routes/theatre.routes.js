const { createTheatre, getAllTheatres, getTheatreById, addMovieToATheatre, checkIfMovieRunningInGivenTheatre } = require("../Controllers/theatre.controllers");
const { verifyToken, verifyAdmin } = require("../Middlewares/authJWT");
const { validateCreateTheatreRequest } = require("../Middlewares/theatre.middlewares");


module.exports = function(app){


    app.post("/mba/api/v1/theatres",[verifyToken, verifyAdmin, validateCreateTheatreRequest],createTheatre);
    app.get("/mba/api/v1/theatres",[],getAllTheatres);
    app.get("/mba/api/v1/theatres/:id",[],getTheatreById);
    app.put("/mba/api/v1/theatres/:theatreId/movies/:movieId",[verifyToken,verifyAdmin],addMovieToATheatre);
    app.get("/mba/api/v1/theatres/:theatreId/movies/:movieId",checkIfMovieRunningInGivenTheatre)


}