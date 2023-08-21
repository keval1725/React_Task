import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Component}=props;
 
    const Navigate = useNavigate();
    useEffect(()=>{
       
          let login =  localStorage.getItem('login');
               if(login === false){
            Navigate('Login')
          }
      
    },[Navigate]);
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected
