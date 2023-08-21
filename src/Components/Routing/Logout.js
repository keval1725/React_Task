import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
  const Navigate = useNavigate();
     const Log = () => {
     localStorage.clear();
     Navigate('/Login');
    }
  return (
    <div className='d-flex p-2 justify-content-between'>
      <input type='button' className='btn btn-dark' onClick={Log} value="LogOut" />
    </div>
  )
}

export default Logout
