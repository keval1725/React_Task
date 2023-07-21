import React, { useContext } from 'react'
import TheamContext from './TheamContext';
import  "../App.css";


function TheamChanger() {
const{IsDark,SetTheam}=useContext(TheamContext);

  return (
    <div>
      <button className={IsDark ?'btn btn-light':'btn btn-dark'} onClick={SetTheam}>{IsDark ?"Set To Light":"Set To Dark"}</button>
    </div>
  )
}

export default TheamChanger
