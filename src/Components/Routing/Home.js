import React from 'react';
import {  NavLink, Outlet } from 'react-router-dom'


function Home() {

  return (
    <div>
      <h1>Home</h1>
      <div  className='p-2'>

  <NavLink style={({isActive})=>{return {color:isActive?"red":"green"}}} className='navbar-brand' to='About'>About</NavLink>
    </div>
    <div  className='p-2'>

  <NavLink style={({isActive})=>{return {color:isActive?"red":"green"}}} className='navbar-brand' to="Contact">Contact</NavLink>
    </div>
<Outlet/> 
</div>
  )
}

export default Home;
