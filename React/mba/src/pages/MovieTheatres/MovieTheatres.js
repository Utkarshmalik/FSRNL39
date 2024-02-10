import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavbarComp from "../../components/common/Navbar/Navbar";
import SpinnerComp from "../../components/common/Spinner/Spinner";
import { getTheatresForAMovie } from "../../api/theatres";
import TheatreComp from "../../components/TheatreDetail/TheatreDetail";

function MovieTheatres(){

    const {movieId: selectedMovie} = useParams();
    const [theatreDetails, setTheatreDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const init=async ()=>{
        const theatres  = await  getTheatresForAMovie(selectedMovie);

        setTheatreDetails(theatres);
        setIsLoading(false);
    }

    useEffect(()=>{
        init();
    },[])


    return  <div>

        <NavbarComp/>

        {isLoading && <SpinnerComp/> }

        {

         !isLoading && 
         
         <div>

            {
                theatreDetails.map((theatre)=> <TheatreComp theatre={theatre} movieId={selectedMovie} />  )
            }

         </div>   



        }

    </div>

}

export default MovieTheatres;