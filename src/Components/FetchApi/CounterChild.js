import React, { useContext } from 'react';
import DataContext from './DataContext';

function CounterChild() {
  const { counter, UpdateCounter } = useContext(DataContext);

  const IncrementCount = () => {
    UpdateCounter(counter + 1);
  };

  const DecrementCount = () => {
    UpdateCounter(counter - 1);
  };

  return (
    <div>
        
      <button className='btn btn-dark p-1 m-1' onClick={IncrementCount}>+</button>
      <button className='btn btn-dark p-1 m-1' onClick={DecrementCount}>-</button>
    </div>
  );
}

export default CounterChild;
