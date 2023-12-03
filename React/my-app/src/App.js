import Navbar from "./Components/Common/Navbar/Navbar";
import { useState } from "react";
import LoginComp from "./Components/Login/Login";
import ProductList from "./Components/ProductList/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){

  console.log("App comp rendered");

  const [isLoggedIn , setIsLoggedIn] = useState(false);

   const onLogin=()=>{
        setIsLoggedIn(true);
  }

  const onLogout=()=>{
            setIsLoggedIn(false);
  }

  return <div style={{ textAlign:"center"}}>


    { 
       (isLoggedIn===true) ?     <ProductList onLogout={onLogout} />  
       : <LoginComp onLogin={onLogin}  />

    }

  </div>
}

export default App;
