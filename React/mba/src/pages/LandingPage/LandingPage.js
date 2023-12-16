import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import NavbarComp from "../../components/common/Navbar/Navbar";
import SpinnerComp from "../../components/common/Spinner/Spinner";
import { getAllMovies } from "../../api/movies";
import { Link } from "react-router-dom";

function LandingPage(){


    const [isLoading , setIsLoading]  = useState(true);
    const [movieList, setMovieList] = useState([]);

        const init  = async ()=>{

        const result = await getAllMovies();
        setMovieList(result.data);
        setIsLoading(false);
    }

    useEffect(()=>{
        init()
    },[])

    return <div>

        <NavbarComp/>
        {
            (isLoading) ? <SpinnerComp/> :  <div>

                        <Slider/>

                        <div className="container my-4 text-center">
                            <p className="fw-bolder">  Recommended Movies </p>

                            <div className="row">

                                {

                                    movieList.map((movie)=>{

                                        return <div className="col-lg-3 col-xs-6 my-2" >
                                            <Link to={`/movie/${movie._id}/details`}>
                                            <div className="d-flex align-items-stretch justify-content-center" style={{height:"25rem"}} >
                                                <div className="card bg-dark shadow-lg" style={{width:"15rem"}} >
                                                    <img src={movie.posterUrl}  alt="..." style={{height:"100%"}} />
                                                    <i className="bi bi-hand-thumbs-up-fill text-success px-2 fw-bolder"> 50K </i>
                                                    <p className="text-white fw-bolder px-2" > {movie.name} </p>
                                                 </div>   

                                             </div>  
                                             </Link> 
                                        </div>

                                    })

                                }

                            </div>    

                        </div>    

                </div>
        }

    

    </div>

}

export default LandingPage;