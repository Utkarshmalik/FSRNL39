import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const getAllMovies = ()=>{

    const PATH = "/mba/api/v1/movies"

    const URL  = BASE_URL + PATH;
    
    return axios.get(URL);
   
}


export const getMovieDetails = (id)=>{

    const PATH = `/mba/api/v1/movies/${id}`

    const URL  = BASE_URL + PATH;
    
    return axios.get(URL);
   
}