
import React from 'react';
import './App.css';
import HeadersContainer from './Containers/HeadersContainer';
import HomeContainer from './Containers/HomeContainer';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './Components/Routing/Login';
import Home from './Components/Routing/Home';
import About from './Components/Routing/About';
import Contact from './Components/Routing/Contact';
import NavBar from './Components/Routing/NavBar';
// import BadRequest from './Components/Routing/BadRequest';
import Protected from './Components/Routing/Protected';
import FetchTest from './Components/FetchApi/FetchTest';
import Logout from './Components/Routing/Logout';
import Post from './Components/FetchApi/Post';
import Comment from './Components/FetchApi/Comment';
import FirstPost from './Components/FetchApi/FirstPost';

import Form from './Components/Test/Form';

function App() {
  return (
    
    <div className='container' > 
    
    <HeadersContainer/>
    <HomeContainer/>
   
 <BrowserRouter>
 <NavBar/>
      <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='Contact' element={<Protected Component={Contact}/>}/>
      <Route path='About' element={<Protected Component={About}/>}/>
      <Route path='/Search' element={<FetchTest/>}/>
      <Route path='/Logout' element={<Logout />}/>
      <Route path='/*' element={<Navigate to={'Login'}/>}/>
      <Route path='/Post' element={<Post/>}/>
      <Route path='/FirstPost' element={<FirstPost/>}/>

      <Route path='/Comment' element={<Comment/>}/>
      </Routes> 
      
     </BrowserRouter> 
   
     <h1>weghfhe</h1>
     <Form/>
     </div>
  );
}

export default App;
