import React from 'react';
import { Button, Card, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import { CiFacebook} from "react-icons/ci";
import { BsTwitter} from "react-icons/bs";
import { AiFillInstagram} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import {FaMobileAlt} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";

const Contacts = () => {
  return (
    <>
      <nav style={{color:"red",width:"100%",backgroundColor:"black",textAlign:"center",fontSize:"50px",fontWeight:"bold"}}>
      bigwave
      </nav>
      <Card style={{ width: '18rem',margin:"auto",marginTop:"50px" }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUsFya9DL9bOADTtUIkMD01q4KlA1-8ESNIF05HPRug&s" style={{borderRadius:"50%",width:"6.5rem",height:"6.5rem",margin:"auto",marginTop:"30px",padding:"0.3rem",border:"1px solid #dddee2",boxShadow:"0 0 3px #dddee2"   }} />
      <Card.Body>
      <div class="text-center">
        <p>Vishwa Keshav</p>
           <p>FOUNDER</p>
         <p>vishwahr12@gmail.com</p>
      </div>
      <hr/>
      <div style={{color:"#4040b3",padding:"0.11rem 0.68rem",fontSize:"200%",margin:"auto",paddingRight:"10px"}} >
      <Container>
      <Row>
        <Col><CiFacebook/></Col>
        <Col><BsTwitter/></Col>
        <Col><AiFillInstagram/></Col>
        <Col> <AiFillLinkedin/></Col>
      </Row>
    </Container>
    </div> 
      </Card.Body>
    </Card>
<hr/>

<Container>
      <Row>
        <Col style={{marginRight:"250px"}}>
        <p>Contact us and we'll get back to you within 24 hours.</p>
        <br/>
        <p>Head Office</p>
        <div>
        <strong>BIGG</strong><br/>
        <ImLocation/><p style={{display:"inline-block"}}>No. 220, 3rd 'C' Cross,2nd Block, 3rd Stage,Basaveshwaranagar, Bangalore 560079</p>
        </div>
      <div>
        <FaMobileAlt/><p style={{display:"inline-block"}}>+91 8217687273</p>
      </div>
        <div>
          <IoMdMail/><p style={{display:"inline-block"}}>connect@bigwave.in</p>
        </div>
        </Col>
        <Col style={{marginLeft:"200px"}}>
          <strong>CONTACT</strong>
          
          <div >
          <Form>
          <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Full Name " />
        </Form.Group>
          </Form>
          </div>
        </Col>
        <Col>
        <div style={{paddingTop:"23px"}}>
          <Form>
          <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Email " />
        </Form.Group>
          </Form><br/>
          <div style={{width:"100px",height:"70px"}}>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button  style={{ backgroundColor:"orange"}}>Send</Button>
          </Form>
          </div>
          </div>
        </Col>
       
          
       
      </Row>
    </Container>
    <div>
      
    </div>
    
    </>
  )
}

export default Contacts;