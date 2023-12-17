import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const signIn = (userDetails)=>{

    const PATH = "/mba/api/v1/auth/signin"

    const URL  = BASE_URL + PATH;
    
    return axios.post(URL,{
        userId:userDetails.userName,
        password:userDetails.password
    });
   
}
