import React, { useState } from 'react'
import TheamContext from './TheamContext';
import TheamChanger from './TheamChanger';
import Content from './FetchApi/Content';
import FetchTest from './FetchTest';

function TheamConverter() {

const[IsDark,ChangeTheam]=useState(false);

const SetTheam=()=>{
    ChangeTheam(!IsDark);
}


  return (
      <TheamContext.Provider value={{IsDark,SetTheam}} >
    <div>
        <TheamChanger/>
        <Content/>
        <FetchTest/>
    </div>
    </TheamContext.Provider>
  )
}

export default TheamConverter
