import axios from 'axios'
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import {  Link, useNavigate } from 'react-router-dom'

const Signup = () => {
 

  const[details,setDetails]=useState({full_name:"",gender:"",pu_college:"",place:"",ph_num:"",referral_code:"",email:"" ,password:""})
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
    if(!details.full_name || details.full_name===""){
      newErrors.full_name="full_name cannot be empty"
    }else if(details.full_name.length<5){
      newErrors.full_name="full_name cannot too short"}

    if(!details.ph_num || details.ph_num===""){
        newErrors.ph_num="full_name cannot be empty"
      }else if(details.ph_num.length<10){
        newErrors.ph_num="full_name cannot too short"}  

    if(!details.password || details.password===""){
      newErrors.password="password cannot be empty"
    }
    if(!details.email || details.email===""){
      newErrors.email="email cannot be empty"
    }
    if(!details.pu_college || details.pu_college===""){
      newErrors.pu_college="pu_college cannot be empty"
    }
    if(!details.place || details.place===""){
      newErrors.place="place cannot be empty"
    }
    if(!details.gender || details.gender===""){
      newErrors.gender="gender cannot be empty"
    }
  
//ternaty?
    return newErrors
  }

const senddata=(e)=>{
  e.preventDefault()

  
const formErrors = validateForm();
  if(Object.keys(formErrors).length>0){setErrors(formErrors)}
  else{

    axios({
      method:"POST",
      url:"https://api.bigwave.in/test_bigwave/api/UserController/signup",
      headers:{
        "Content-Type":"application/json"
      },
      data:JSON.stringify(details) 
      
    })
    .then((res)=>{
      console.log(res)
      if(res){
        sessionStorage.setItem("user",JSON.stringify(res.data.json))
        sessionStorage.setItem("details",JSON.stringify(res.data.json.id))
        sessionStorage.setItem("code",JSON.stringify(res.data.json.verification_code));
        nav('/con')
        alert(res.data.message)
        
    }
      e.preventDefault()
 
        nav('/con')
  
    })

  }

  setDetails({full_name:"",gender:"",pu_college:"",place:"",ph_num:"",referral_code:"",email:"" ,password:""})
}
const back=(e)=>{
  e.preventDefault()
  nav('/')
}

  return (
    <div>
      <nav style={{color:"red",width:"100%",backgroundColor:"black",textAlign:"center",fontSize:"50px",fontWeight:"bold"}}>
      bigwave
      </nav>
      <Container>
        <Row>
         
         
        </Row>
        <Row>
        <Card class="shadow-lg p-1 mb-5 bg-white gray" >
     
     <Card.Body>
       <Form>
      <Container>
        <Row>
          <Col>
          <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>               
        <Form.Control type="text" placeholder="Enter your name" 
       name='full_name'
       value={details.full_name}
        onChange={(e)=>{
          changehandler(e)
        setField("full_name")
        }} 
        isInvalid={!!errors.full_name}/>
        <Form.Control.Feedback type="invalid">{errors.full_name}</Form.Control.Feedback>
       
      </Form.Group>
          </Col>
          <Col>
          <Form.Group className="mb-3" >
        <Form.Label>gender</Form.Label>
        {/* <select id="gender" name="gender" required="" >
          <option  value="" disabled="disabled">Select</option>
        <option  value="Male">Male</option>
        <option  value="Female">Female</option>
        </select> */}
     
        
        <Form.Control type="option" placeholder="Enter your grnder"
        name='gender'
        value={details.gender}
        onChange={(e)=>{
          changehandler(e)
          setField("gender")

        }}
        isInvalid={!!errors.gender} />
                <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
               

      </Form.Group>
          </Col>
        </Row>
      </Container>
     

    
      {/* pu_college */}
      <Form.Group className="mb-3" >
        <Form.Label>PU College</Form.Label>
        
        <Form.Control type="text" placeholder="pu_college"
        name='pu_college'
        value={details.pu_college}
        onChange={(e)=>{
          changehandler(e)
          setField("pu_college")

        }}
        isInvalid={!!errors.pu_college} />
                <Form.Control.Feedback type="invalid">{errors.pu_college}</Form.Control.Feedback>
               

      </Form.Group>
     
     <Container>
      <Row>
        <Col  >
        <Form.Group className="mb-3" >
        <Form.Label>place</Form.Label>
        
        <Form.Control type="Text" placeholder="place"
        name='place'
        value={details.place}
        onChange={(e)=>{
          changehandler(e)
          setField("place")

        }}
        isInvalid={!!errors.place} />
                <Form.Control.Feedback type="invalid">{errors.place}</Form.Control.Feedback>
               

      </Form.Group>
        </Col>
        <Col >
        <Form.Group className="mb-3" >
        <Form.Label> ph_num</Form.Label>
        
        <Form.Control type="Z" placeholder="ph_num"
        name='ph_num'
        value={details.ph_num}
        onChange={(e)=>{
          changehandler(e)
          setField("ph_num")

        }}
        isInvalid={!!errors.ph_num} />
                <Form.Control.Feedback type="invalid">{errors.ph_num}</Form.Control.Feedback>
               

      </Form.Group>

        </Col>
      </Row>
     </Container>   
     
      
      <Form.Group className="mb-3" >
        <Form.Label>referral_code</Form.Label>
        
        <Form.Control type="text" placeholder="referral_code"
        name='referral_code'
        value={details.referral_code}
        onChange={(e)=>{
          changehandler(e)
          setField("referral_code")

        }}
        isInvalid={!!errors.referral_code} />
                <Form.Control.Feedback type="invalid">{errors.referral_code}</Form.Control.Feedback>
               

      </Form.Group>
     
      <Form.Group className="mb-3" >
        <Form.Label>email</Form.Label>
        
        <Form.Control type="email" placeholder="email"
        name='email'
        value={details.email}
        onChange={(e)=>{
          changehandler(e)
          setField("email")

        }}
        isInvalid={!!errors.email} />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
               

      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>password</Form.Label>
        
        <Form.Control type="password" placeholder="password"
        name='password'
        value={details.password}
        onChange={(e)=>{
          changehandler(e)
          setField("password")

        }}
        isInvalid={!!errors.password} />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
               

      </Form.Group>
     
      
      <Form.Group className="mb-3" >
      </Form.Group>
      <Button variant="primary" type="submit" onClick={senddata}>
        Submit
      </Button><br/>

      <Button variant="warning" type="submit" onClick={back}>
        Already have a Account
      </Button>
      </Form>     

     </Card.Body>
      </Card>
          
        </Row>
      </Container>
    </div>
  )
}


  export default Signup;