import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Signup from './Signup'
import {  json, Link, useNavigate } from 'react-router-dom'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';


const Login = () => {
  const[details,setDetails]=useState({email:"",password:""})
  const [errors,setErrors]=useState({});
const nav=useNavigate()

  const changehandler=(e)=>{
    setDetails({...details,[e.target.name]:e.target.value})
  }
   //validation
  const setField=(field)=>{
    if(!!errors[field]){setErrors({...errors,[field]:null})}
  }

 const validateForm=()=>{
    const newErrors={};
    if(!details.email || details.email===""){
      newErrors.email="email cannot be empty"
    }else if(details.email.length<5){
      newErrors.email="email cannot too short"}

    if(!details.password || details.password===""){
      newErrors.password="password cannot be empty"
    }

    return newErrors
  }

const senddata=(e)=>{
  e.preventDefault()

  
const formErrors = validateForm();
  if(Object.keys(formErrors).length>0){setErrors(formErrors)}
  else{

    // nav('/das')
    //     alert(`welcome user`)
    console.log (JSON.stringify(details))

    axios({
      method:"POST",
      url:"https://api.bigwave.in/test_bigwave/api/UserController/login",
      headers:{
        "Content-Type":"application/json"
      },
      data:JSON.stringify(details) 
    })
    .then((res)=>{
      console.log(res)
      if(res.data.token){
        sessionStorage.setItem("user",JSON.stringify(res.data));
        nav('/success')
        //alert(`Welocme `)
        
    }
      else{
        alert("bad credentionals")
      }
    })

  }

  // setDetails({email:"",password:""})
}

const createdata=(e)=>{
  e.preventDefault()
  nav('/das')
}
const forgot=(e)=>{
  e.preventDefault()
  nav('/for')
}
const Contacts=(e)=>{
  e.preventDefault()
  nav('/contacts')
}
  
 return (
  <Container >
  <Row>
    <Col>
    <div >
      <img src="https://bigwave.in/assets/logo.png" alt='logo'/>
    </div>
    <div>
      <h2>KCET College Predictor 2022</h2>
    </div>
    </Col>
    <Col>
    <div>
        <Card style={{ width: '18rem' , margin:"auto", marginTop:"50px" ,backgroundColor:"lemonchiffon" }} >
      <Card.Body>

      <Form>
      <Form.Group className="mb-3" >
        <Form.Label style={{marginLeft:"70px" }}>Email</Form.Label>
        <Container>
                      <Row>
                        <Col  sm={1}><PersonOutlineOutlinedIcon/></Col>
                        <Col  sm={10} >
        <Form.Control type="text" placeholder="Enter your Email" 
       name='email'
       value={details.email}
        onChange={(e)=>{
          changehandler(e)
        setField("email")
        }} 
        isInvalid={!!errors.email}/>
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Col>
        </Row>
        </Container>
       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label style={{marginLeft:"70px" }}>  password</Form.Label>
        <Container>
                      <Row>
                        <Col  sm={1}><VpnKeyOutlinedIcon/></Col>
                        <Col  sm={10} >
        <Form.Control type="password" placeholder="password"
        name='password'
        value={details.password}
        onChange={(e)=>{
          changehandler(e)
          setField("password")

        }}
        isInvalid={!!errors.password} />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Col>
                </Row>
                </Container>

      </Form.Group>
     
      
      <Form.Group className="mb-3" >
      </Form.Group>
      <Button variant="btn btn-warning" type="submit" style={{backgroundColor:"organe",width:"100%",marginBottom:0}} onClick={senddata}>
        Log In
      </Button>
   

      <Button style={{marginLeft:"20%",}} variant="wi" type="submit"onClick={forgot} >
       Forgotpassword
      </Button>

      <Button variant="danger" style={{backgroundColor:"organe",width:"100%",marginBottom:0}} type="submit" onClick={createdata}>
        create New Account
      </Button>

      <Button variant="l" style={{width:"100%",marginBottom:0}} type="submit"onClick={Contacts} >
        About / Contact
      </Button>

    </Form>
   
      </Card.Body>
    </Card>
    </div>
    </Col>
    </Row>
    </Container>
    
  )
 }

export default Login;