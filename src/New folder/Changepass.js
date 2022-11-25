import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Changepass() {
    const [newPassword,setNewPassword]=useState();
    const [confirmPassword,setconfirmPassword]=useState();
    const [id,setId]=useState();

    const nav=useNavigate();

    const confrimMail=(e)=>{
        e.preventDefault();
        console.log("hi");
        const details={
            "id":id,
          "confirmPassword":confirmPassword,
          "newPassword":newPassword}
        axios({
            method:"PUT",
            url:"https://api.bigwave.in/test_bigwave/api/UserController/forgot_password",
            data:details
          }).then((res)=>{
            console.log(res);
            if(res.status===200){
            alert(res.data.message);
            
               nav("/");
           
            }else{
                alert(res.data.message)
            }
           
          });
     

    }

    useEffect(
        ()=>{
            //setCode(JSON.parse(sessionStorage.getItem("code")));
            setId(JSON.parse(sessionStorage.getItem("details")));
        }
    ,[]);
  return (
    <div>
        <nav style={{color:"red",width:"100%",backgroundColor:"black",textAlign:"center",fontSize:"50px",fontWeight:"bold"}}>
      bigwave
      </nav><br/>

        <Container>
            <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">       
               <Form.Control type="number" placeholder="Confirm Password" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}}/>       
                </Form.Group> </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">       
               <Form.Control type="number"  placeholder="New Password"   value={confirmPassword} onChange={(e)=>{setconfirmPassword(e.target.value)}}/>       
                </Form.Group>  
                
                </Col>
                
                <Col> <Button variant="danger" onClick={confrimMail} style={{paddingRight:"20%",marginLeft:"10%",paddingLeft:"20%"}} type="submit">
       Confirm
      </Button></Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default Changepass
