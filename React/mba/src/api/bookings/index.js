import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;


export const createBooking = async (bookingRequest)=> {

      try{
    const res= await axios.post(`${BASE_URL}/mba/api/v1/bookings`,bookingRequest,
    {
      headers:{
        'x-access-token':localStorage.getItem("token")
    }}
    )


    return res;

   }
   catch(err){
    console.log(err);
   }

}