import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/movies";
import NavbarComp from "../../components/common/Navbar/Navbar";
import ReactPlayer from "react-player";
import SpinnerComp from "../../components/common/Spinner/Spinner";
import { Button } from "react-bootstrap";

function MovieDetail(){

    const {movieId  : selectedMovie} = useParams();

    const [movieData, setMovieData]  = useState(null);

    const init = async () => {

        const response = await getMovieDetails(selectedMovie);
        setMovieData(response.data);
    }

    useEffect(()=>{
        init();
    },[])



    

    return <div>

        {
            (!movieData) ? <SpinnerComp/> :  <div>

        <NavbarComp/>

        <div className="bg-light">

            <div>
                <ReactPlayer url={movieData.trailerUrl} controls={true} width="100%" />
            </div>

            <div className="container my-5">

                <div className="row">

                    <div className="col">

                        <img src={movieData.posterUrl} alt="..." width={300} height={450} />

                     </div>   



                    <div className="col">

                        <h2 className="fw-bolder"> About the Movie  </h2>

                        <h3> {movieData.name} </h3>
                        <h3> {movieData.director} </h3>
                        <h3> {movieData.releaseDate} </h3>

                        <hr/>

                        <h5> Cast </h5>  

                        {
                            movieData.cast.map(name=> <li className="list-group-item" > {name}  </li>)
                        }


                        <Button className="my-5 text-light p-2" variant="danger"> 

                        <Link to={`/buyTickets/${selectedMovie}`}>
                        Book Tickets  
                        </Link>

                        
                        </Button>


                     </div>  


                 </div>   

            </div>    

        </div>

        </div>

        }

    </div>

}

export default MovieDetail;