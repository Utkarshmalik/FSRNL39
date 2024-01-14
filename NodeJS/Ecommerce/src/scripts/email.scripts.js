

const registerUser  = ()=>{

}

const bookingSuccess =  (user,booking)=>{

    return {

        subject : `Congratualations ${user.name} ! Your booking is confirmed`,
        html: `
        
        <div>

        <h3> Hello ${user.name} </h3>

        <br/>

        Your booking is confirmed , Here are your details 
        
        
        <h5>Booking Id : ${booking._id} </h5>
        <hr/>
        <h5> Theatre Id : ${booking.theatreId}</h5>
                <hr/>

        <h5> movie Id : ${booking.movieId}</h5>
                <hr/>

        <h5> no of seats : ${booking.noOfSeats}</h5>
                <hr/>

        <h5> totalCost : ${booking.totalCost}</h5>
        
        `

    }

}

module.exports = {
    registerUser,
    bookingSuccess
}