import { Link } from "react-router-dom";


function TheatreComp(props){

    const {theatre, movieId} = props;
    const {name} = theatre;

    return <>

    <Link to={`/buyTickets/${movieId}/${theatre._id}`}>

    <div style={{border:"1px solid grey",cursor:"pointer"}} className="row py-5 m-5" >

        <div className="col">

            <h5> {name} </h5>

        </div>

           <div className="col">

            <div className="fw-bold">
                <i class="bi f bi-phone text-success"></i>

            </div>
        </div>


        <div className="col">

            <div>
                <i class="bi bi-cup-straw text-danger"></i>

            </div>
        </div>



    </div>

    </Link>

    
    </>
    
    
}

export default TheatreComp;