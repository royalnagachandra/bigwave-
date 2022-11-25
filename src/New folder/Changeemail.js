import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Changeemail() {

    const[eemail,setemail]=useState();
    const[id,setId]=useState();

    const nav=useNavigate();
    useEffect(
        ()=>{
            //setCode(JSON.parse(sessionStorage.getItem("code")));
            setId(JSON.parse(sessionStorage.getItem("details")));
        }
    ,[]);
    const logout=()=>{
        sessionStorage.removeItem("user");
        nav("/");
      }
    const uodateEmail=(e)=>{
        e.preventDefault();
        const details={
            "id":id, 
              "email":eemail
        }
        axios({
            method:"PUT",
            url:"https://api.bigwave.in/test_bigwave/api/UserController/update_email",
            data:details
          }).then((res)=>{
            console.log(res);
            if(res.data.status==="success"){
                alert(res.data.message);
                nav("/con");
            }else{
                alert(res.data.message)
            }
           
          });
    }
  return (
    <div>
      <nav style={{color:"red",width:"100%",backgroundColor:"black",textAlign:"center",fontSize:"50px",fontWeight:"bold"}}>
      bigwave
      </nav>
      <div >
      <Card style={{width: '18rem',marginLeft:"30%",marginTop:"10%",backgroundColor:"lightgray"  }}>
    <Card.Text>
         <h1>New Email id</h1>
        </Card.Text><hr/>
     
      <Card.Body>
        
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{marginLeft:"20%"}} >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={eemail} onChange={(e)=>{setemail(e.target.value)}} />
        
      </Form.Group>
      </Form>
        
        <Button variant="danger" style={{paddingRight:"20%",marginLeft:"10%",paddingLeft:"20%"}} onClick={uodateEmail}>Update</Button><br/><br/>
         <Button variant="primary"style={{marginLeft:"30%",borderRadiusleft:"35px"}} >Back</Button><br/>
          <Button variant="white"style={{marginLeft:"30%"}} onClick={logout}>Logout</Button><br/>
      </Card.Body>
    </Card>

      </div>
     

      
    </div>
  )
}

export default Changeemail
