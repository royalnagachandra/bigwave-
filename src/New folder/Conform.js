import { bgcolor } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Conform = () => {
  
    const[id,setId]=useState();
    const[code,setCode]=useState();
    const nav=useNavigate()

    const logout=()=>{
        sessionStorage.removeItem("user");
        nav("/");
      }
    useEffect(
        ()=>{
            setCode(JSON.parse(sessionStorage.getItem("code")));
            setId(JSON.parse(sessionStorage.getItem("details")));
        }
    ,[]);

    const confrimMail=(e)=>{
        e.preventDefault();
        const details={
            "id":id, 
              "verification_code":code
        }
        axios({
            method:"POST",
            url:"https://api.bigwave.in/test_bigwave/api/UserController/verify",
            data:details
          }).then((res)=>{
            console.log(res);
            if(res.data.status==="success"){
                alert(res.data.message);
                nav("/");
            }else{
                alert(res.data.message)
            }
           
          });
    }
    const sendcode=(e)=>{
        e.preventDefault();
        const details={
            "id":id}
       
        axios({
            method:"PUT",
            url:"https://api.bigwave.in/test_bigwave/api/UserController/send_code",
            data:details
          }).then((res)=>{
            console.log(res);
            if(res.data.status==="success"){
                alert(res.data.message);
                setCode(res.data.json.verification_code)
                alert("changed")
            }else{
                alert(res.data.message)
            }
           
          });
    }
    const email=(e)=>{
        e.preventDefault()
 
        nav('/email')

    }
   
  return (
    <div>
       <nav style={{color:"red",width:"100%",backgroundColor:"black",textAlign:"center",fontSize:"50px",fontWeight:"bold"}}>
      bigwave
      </nav>

<Card style={{ width: '30rem' ,marginLeft:"20%",marginTop:"6%",
      backgroundColor:"lightgray" }}>
         <Card.Text><h1 style={{ width: '30rem' ,marginLeft:"20%"}}> Confirm your email</h1>
        
        </Card.Text><hr/>
    
    <Card.Body>
   
    <Card.Text>
       We've sent email with code to <>nnagachandra1999@gmail.com</> <br/>

Enter the 5-digit code from your email.
        
        </Card.Text>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="number"  value={code} onChange={(e)=>{setCode(e.target.value)}}/>
        
      </Form.Group>    
   
      <Button variant="danger" onClick={confrimMail} style={{paddingRight:"20%",marginLeft:"10%",paddingLeft:"20%"}} type="submit">
       Confirm
      </Button><br/><br/>

      <Button style={{marginLeft:"20%",}} variant="primary" type="submit" onClick={email}>
        Change Email
      </Button><br/><br/>

      <Button style={{marginLeft:"20%",}}variant=""  type="submit"onClick={sendcode} >
        Send Code Agin
      </Button>
    </Form>
     
      <Button style={{marginLeft:"20%",}} variant="" onClick={logout}>Logout</Button>
    </Card.Body>
  </Card>

    </div>
   


   








    
  )
}

export default Conform