import React, { useState } from 'react';
import CounterChild from './CounterChild';
import DataContext from './DataContext';

function CounterParents() {
  const [counter, setCounter] = useState(0);

const UpdateCounter =(newCounter)=>{
    setCounter(newCounter);
}

  return (
    <DataContext.Provider value={{ counter, UpdateCounter }}>
      <div>
        <CounterChild />
        <h1>{counter}</h1>
      </div>
    </DataContext.Provider>
  );
}

export default CounterParents;
