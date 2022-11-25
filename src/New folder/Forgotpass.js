import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Forgotpass() {
    const[eemail,setemail]=useState();
    const[id,setId]=useState();
    const nav=useNavigate()
  
    useEffect(
        ()=>{
            //setCode(JSON.parse(sessionStorage.getItem("code")));
            setId(JSON.parse(sessionStorage.getItem("details")));
        }
    ,[]);

    const forgetpassword=(e)=>{
        e.preventDefault();
        console.log("hi");
        const details={
          
              "email":eemail
        }
        axios({
            method:"POST",
            url:"https://api.bigwave.in/test_bigwave/api/UserController/reenter_email",
            data:details
          }).then((res)=>{
            console.log(res);
            if(res.data.status==="success"){
                sessionStorage.setItem("code",JSON.stringify(res.data.json.verification_code));
                alert(res.data.message);
                nav('/conpass')
            }else{
                alert(res.data.message)
            }
           
          });
    }
    const logout=()=>{
        sessionStorage.removeItem("user");
        nav("/");
      }
  return (
    <div>
       <nav style={{color:"red",width:"100%",backgroundColor:"black",textAlign:"center",fontSize:"50px",fontWeight:"bold"}}>
      bigwave
      </nav>
         <Card style={{ width: '25rem',marginLeft:"30%",marginTop:"10%",backgroundColor:"lightgray" }}>
    <Card.Text>
         <h1>  Forgot  password</h1>
        </Card.Text><hr/>
     
      <Card.Body>
        
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enetr Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={eemail}
         onChange={(e)=>{setemail(e.target.value)}}
         />
        
      </Form.Group>
      </Form>
        
        <Button variant="danger" style={{paddingRight:"20%",width:"100%"  }} 
         onClick={forgetpassword}
        >
            Update</Button><br/>
         <Button variant="none">Back</Button><br/>
          <Button variant="none"onClick={logout}>Logout</Button><br/>
      </Card.Body>
    </Card>

      
    </div>
  )
}

export default Forgotpass
