
import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './Components/Routing/Login';
import Home from './Components/Routing/Home';
import About from './Components/Routing/About';
import Contact from './Components/Routing/Contact';
import NavBar from './Components/Routing/NavBar';
// import BadRequest from './Components/Routing/BadRequest';
import Protected from './Components/Routing/Protected';
import Register from './Components/Routing/Register';
import FetchTest from './Components/FetchApi/FetchTest';
import Logout from './Components/Routing/Logout';
// import FetchTest from './Components/FetchApi/FetchTest';
import Form from './Components/FetchApi/Form';

function App() {
  return (
    
    <div className='container' >
      <Form/>
 {/* <BrowserRouter>
     <NavBar/>
      <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Home/>}>
         <Route path='Contact' element={<Protected Component={Contact}/>}/>
         <Route path='About' element={<Protected Component={About}/>}/>
      </Route>
      <Route path='/Search' element={<FetchTest/>}/>
      
      <Route path='/Register' element={<Register />}/>
      <Route path='/Logout' element={<Logout />}/>
      <Route path='/*' element={<Navigate to={'Login'}/>}/>


      </Routes> 
      
     </BrowserRouter>  */}
     <FetchTest/>

    </div> 
  );
}

export default App;
