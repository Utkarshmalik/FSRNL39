import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../../App';

function NavbarComp() {


  const {theme, setTheme} = useContext(ThemeContext);

  const navigate = useNavigate();

  const token= localStorage.getItem("accessToken");
  const isLoggedIn = token!==null;


  const onAuthBtnClick=()=>{

    if(isLoggedIn){
      localStorage.clear();
      navigate("/");
    }
    else{
      navigate("/login");
    }

  }

  const onThemeToggle=()=>{

    if(theme==="dark"){
      setTheme("light");
    }else{
      setTheme("dark");
    }


  }

  return (
    <>
      <Navbar bg={theme} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MBA</Navbar.Brand>

          <div>


         <Button variant='light' className='px-3 m-2' onClick={onAuthBtnClick}  > 

         {
            (isLoggedIn) ? "Logout" :"LogIn"
         }
         
          </Button>

         


         <Button variant='light' className='px-3 m-2' onClick={onThemeToggle}  > 

         Toggle Theme 
          </Button>

          </div>


        </Container>
      </Navbar>
 
     
    </>
  );
}

export default NavbarComp;