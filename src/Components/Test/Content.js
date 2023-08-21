import React, { useContext } from 'react';
import TheamContext from '../TheamContext';
import  "../App.css";

function Content() {
  const{IsDark}=useContext(TheamContext);
  return (
    <div className={IsDark?"dark":"light"}>
      <h1>

      
Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam nisi sunt ut, eaque voluptatum id! Beatae repellat dolorem facere at amet odit error enim nulla consectetur? Ab, vero at!
</h1>
    </div>
  )
}

export default Content;
