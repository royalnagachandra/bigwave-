import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import Signin from './New folder/signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NestRouting from './NestRouting';
import Signup from './New folder/Signup';
import Conform from './New folder/Conform';
import Changeemail from './New folder/Changeemail';
import Forgotpass from './New folder/Forgotpass';
import Conformpass from './New folder/Conformpass';
import Changepass from './New folder/Changepass';
import Success from './New folder/Success';
import Contacts from './New folder/Contacts';
import Login from './New folder/Login';




function App() {
  return (
   
  // <div>
  //   <About/>
  //   {/* <Signin/><br/> */}
  // {/* <Signup/> */}
  // </div>
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/> 
  <Route path='/con'element={<Conform/> }/>
  <Route path='/conpass'element={<Conformpass/> }/>
  <Route path='/repass'element={<Changepass/> }/>
  <Route path='/for'element={<Forgotpass/> }/>
  <Route path='/email'element={<Changeemail/> }/>
  <Route path='/success'element={<Success/> }/>
  <Route path='/contacts'element={<Contacts/> }/>


  <Route path='/das'element={<Signup/>}>
  
    <Route index element={<Login/>}/>
    {NestRouting.map((item , index)=>{
     return<Route key={index}  exact path={item.path} element={item.element} />
    }) }
    </Route>  
 


</Routes>



    </BrowserRouter>
   
  
  );
}

export default App;
