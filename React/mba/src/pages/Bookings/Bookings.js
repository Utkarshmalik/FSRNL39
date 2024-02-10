import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTheareDetails } from "../../api/theatres";
import { getMovieDetails } from "../../api/movies";
import SpinnerComp from "../../components/common/Spinner/Spinner";
import NavbarComp from "../../components/common/Navbar/Navbar";
import "./Booking.css";
import Cinema from "../../components/Cinema/Cinema";
import { Button } from "react-bootstrap";
import Payments from "../../components/Payments/Payments";
import { createBooking } from "../../api/bookings";


function Bookings(){

    const price=599;

    const {movieId, theatreId} = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);

    console.log(movieId, theatreId);

    const [movieDetails, setMovieDetails] = useState(null);
    const [theatreDetails, setTheatreDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showPaymentModel , setShowPaymentModal] =  useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);


    const getTheatreDetailsFn = async ()=>{
        const thearesData = await getTheareDetails(theatreId);
        setTheatreDetails(thearesData.data);
    }

      const getMovieDetailsFn = async ()=>{
        const moviesData = await getMovieDetails(movieId);
        setMovieDetails(moviesData.data);
    }

    async function init(){
        await Promise.all([getTheatreDetailsFn(),getMovieDetailsFn()]);
        setIsLoading(false)
    }

    const onProceedToPayment=()=>{
        setShowPaymentModal(true);
    }

    useEffect(()=>{

        init()

    },[])


    function closeModel(){
        setShowPaymentModal(false);
    }

    const confirmBooking = async ()=>{

        const data={
            theatreId,
            movieId,
            showDate:"10/02/2024",
            showTimings:"Evevning",
            seats:[1,5,6,7]
        }

        const booking = await createBooking(data);

        setBookingDetails(booking.data);


        console.log(booking);


    }


    return <div className="text-center bg-black vh-100 text-light fullView">


        {isLoading && <SpinnerComp/>}

        {

            !isLoading && <div>

                <div>
                    <h2 className="fw-bold"> {movieDetails.name}  </h2>

                    <ShowCase/>

                    <Cinema movieDetails={movieDetails} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />


                    <p className="info">

                        You have selected <span className="count"> {selectedSeats.length}  </span>

                        seats 

                      <hr/>



                        Your total price of booking  is  {' '} 

                        <span className="total">

                            {selectedSeats.length *price } Rupees 
                        </span>

                    </p>

                    <Button onClick={onProceedToPayment} variant="success" size="lg">

                        Proceed To Payment
                    </Button>

                  </div>  

                        <Payments show={showPaymentModel} close={closeModel}
                        theatreDetails={theatreDetails}
                        movieDetails={movieDetails}
                        selectedSeats={selectedSeats}
                        total={selectedSeats.length *price}
                        confirmBooking={confirmBooking}
                        bookingDetails={bookingDetails}
                        />

                </div>




        }




    </div>

}


function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}


export default Bookings;