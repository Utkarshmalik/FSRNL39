import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";



function Payments({show, close,movieDetails,theatreDetails,selectedSeats,total,confirmBooking,bookingDetails}){

    return <div>

        <Modal className="p-5" show={show} onHide={close}>

            <Modal.Header closeButton>
          <Modal.Title>ORDER SUMMARY</Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <div className='row'>

              <div className='col my-2'>
                    <h5> {movieDetails.name}</h5>
                    <small> {movieDetails.language} </small>
                    <br/>
                    <small className='fw-bolder'> {theatreDetails.name} </small>
                    <br/>
                    <small className='text-success'> m-Ticket </small>
                </div>


                <div className='col-5'>
                    <h5> {selectedSeats.length}  Tickets </h5>    
                </div>


        </div>

        <hr/>



            <div className='row'>

                <div className='col'>
                    <p> Total </p>
                </div>

                   <div className='col-3'>
                    <p> Rs {total} </p>
                </div>
            </div>

             {

                bookingDetails && 
            <div>
                {
                     bookingDetails ? (


                        <div className='d-flex flex-column justify-content-between align-items-center'>
                            <img src={movieDetails.posterUrl} height={100} width={100} />

                            <h5> Booking Confirmed !</h5>
                            <small> Booking Id :  </small>
                            <p className='fw-bolder'> {bookingDetails._id} </p>

                            <Link to="/">
                            <p> Go to Landing Page </p>
                            </Link>

                        </div>
                    ):

                        <div className='d-flex flex-column justify-content-between align-items-center'>
                            <img src={movieDetails.posterUrl} height={100} width={100} />

                            <h5> Booking Failed !</h5>
                            <small>Please Retry  </small>

                        </div>


                }

            </div>
         }

        </Modal.Body>


        <Modal.Footer>
        <Button variant="secondary" onClick={close}>
            Close
         </Button>

         {
            ! bookingDetails && <Button variant="success" onClick={confirmBooking}>
            Confirm Payment 
         </Button>


         }


      

 
         </Modal.Footer>






 
                </Modal>


    </div>

}

export default Payments;