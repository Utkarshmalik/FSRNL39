import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signIn } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

function Authentication(){


    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onUserNameChange=(e)=>{
        setUserName(e.target.value);

    }

    const onPasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    

    const onFormSubmit = async (e)=>{
        e.preventDefault();

        console.log(userName);
        console.log(password);

        try{
        const response = await signIn({userName,password});

        const {name,userId, email, userStatus, userTypes, accessToken }  = response.data;

        localStorage.setItem("name",name);
        localStorage.setItem("userId",userId);
        localStorage.setItem("email",email);
        localStorage.setItem("userStatus",userStatus);
        localStorage.setItem("userTypes",userTypes);
        localStorage.setItem("accessToken",accessToken);  
        
        redirect();


        }
        catch(err){
            console.log("Invalid Credentials",err);
        }

    }

    const redirect=()=>{

        const userTypes = localStorage.getItem("userTypes");

        if(userTypes=="CUSTOMER"){
            navigate("/");
        }
        else if(userTypes==="ADMIN"){

            navigate("/admin");
        }


    }

    return <div className='bg-dark vh-100 d-flex justify-content-center align-items-center text-white p-5'>  

         <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName </Form.Label>
        <Form.Control value={userName} type="text" placeholder="Enter userName"  onChange={onUserNameChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} type="password" placeholder="Password" onChange={onPasswordChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>

}

export default Authentication;