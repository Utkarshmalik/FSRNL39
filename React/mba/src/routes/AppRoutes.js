import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Authentication from "../pages/auth/Auth";
import LandingPage from "../pages/LandingPage/LandingPage";
import Admin from "../pages/Admin/Admin";
import MovieDetail from "../pages/MovieDetail/MovieDetail";
import MovieTheatres from "../pages/MovieTheatres/MovieTheatres";
import Bookings from "../pages/Bookings/Bookings";


function AppRoutes(){

    return (
        
        <Router>

            <Routes>

                <Route
                path="/"
                element={<LandingPage/>}
                />

                <Route 
                path="/login"
                element={<Authentication/>}
                />

                <Route 
                exact={true}
                path="/admin"
                element={<Admin/>}
                />

                <Route 
                path="/movie/:movieId/details"
                element={
                    <MovieDetail/>
                }
                />

                <Route
                path="/buyTickets/:movieId"
                element = {
                    <MovieTheatres/>
                }
                />

                    <Route
                path="/buyTickets/:movieId/:theatreId"
                element = {
                    <Bookings/>
                }
                />

             

            </Routes>

        </Router>


    )


}

export default AppRoutes;