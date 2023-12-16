import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Authentication from "../pages/auth/Auth";
import LandingPage from "../pages/LandingPage/LandingPage";
import Admin from "../pages/Admin/Admin";
import MovieDetail from "../pages/MovieDetail/MovieDetail";


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

             

            </Routes>

        </Router>


    )


}

export default AppRoutes;