import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getAllTheares = ()=>{

    const PATH = "/mba/api/v1/theatres"

    const URL  = BASE_URL + PATH;
    
    return axios.get(URL);
   
}


export const getTheatresForAMovie = async (movieId)=>{
    
    const theatresData = await getAllTheares();

    const theatresRunning = theatresData.data.filter((theatre)=>{

        if(theatre.movies){
          const movies =  theatre.movies.filter((movie)=> movie._id===movieId);
          return movies.length;

        }

    })

    return theatresRunning;
   
}


export const getTheareDetails = (id)=>{

    console.log(id);

    const PATH = `/mba/api/v1/theatres/${id}`

    const URL  = BASE_URL + PATH;
    
    return axios.get(URL);
   
}
