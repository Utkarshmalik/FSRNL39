import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MBA</Navbar.Brand>
         

         <Button variant='light' className='px-3' >  SignIn </Button>

        </Container>
      </Navbar>
 
     
    </>
  );
}

export default NavbarComp;