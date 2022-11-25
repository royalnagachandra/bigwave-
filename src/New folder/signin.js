import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link,  } from 'react-router-dom'

import '../New folder/Signin.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import Signup from './Signup';
const Signin = () => {
  const [errors,setErrors]=useState({});
  const[details,setDetails]=useState({email:"",password:""})



 



 
 
 
  return (
    <Container>
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
             <Card class="shadow-lg p-3 mb-5 bg-white rounded" >
     
             <Card.Body>
                <Form>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Container>
                      <Row>
                        <Col  sm={1}><PersonOutlineOutlinedIcon/></Col>
                        <Col  sm={10} >
                        <Form.Control type="text" placeholder="Enter your name" 
      />                          
                          </Col>
                      </Row>
                    </Container>                  
                    </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Container>
                      <Row>
                        <Col  sm={1}><VpnKeyOutlinedIcon/></Col>
                        <Col  sm={10} >
                        <Form.Control type="password" placeholder="Password"
        name='password'
       
        />                      

                          </Col>
                      </Row>
                    </Container> 
                 </Form.Group>
     
                 <Button variant="primary" type="submit"    >Log in  </Button><br/>
                 
                 <ul>
                  <li>Forgot Password ?</li>
                </ul>
                 
                  <Button variant="danger" type="submit" onClick={<Signup/>} >    Create New Account </Button>
                 
                <ul>
                  <li>About/Contact</li>
                </ul>
                 

                </Form>
      
             </Card.Body>
              </Card>
            </div>
   </Col>
    </Row>
  
  </Container>
  )
}

export default Signin