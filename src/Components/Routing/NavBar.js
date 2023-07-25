import React  from 'react'
import {  NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='d-flex justify-content-between navbar navbar-expand-lg navbar-light bg-light'>
        <div className='d-flex p-2 justify-content-between'>
            <div className='p-2'>

        <NavLink style={({isActive})=>{return {color:isActive?"red":"green"}}}  className='navbar-brand' to="/">Home</NavLink>
            </div>
           
        </div>
        {/* <div  className='d-flex p-2 justify-content-between'>

        <Link className='navbar-brand' to="/Search">Search</Link>
            </div> */}

        <div className='d-flex p-2 justify-content-between'>
           <div  className='p-2'>

          <NavLink style={({isActive})=>{return {color:isActive?"red":"green"}}} className='navbar-brand' to="/Register">Register</NavLink>
           </div>
           <div  className='p-2'>

           <NavLink style={({isActive})=>{return {color:isActive?"red":"green"}}} className='navbar-brand' to="/Login">Login</NavLink>
        </div>
        <div  className='p-2'>

           <NavLink style={({isActive})=>{return {color:isActive?"red":"green"}}} className='navbar-brand' to="/Logout">Logout</NavLink>
        </div>
      
      
    
        </div>
      
    </div>
  )
}

export default NavBar
