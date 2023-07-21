import React, { useReducer,useCallback, memo } from 'react';


const initialstate = 0;

const reducer = (state,action)=>{
   
    switch (action) {
        case 'Increment':
          return state + 1;
        case 'Decrement':
          return state - 1;
        case 'Reset':
          return initialstate;
        default:
          return state;
      }
}
function UseReducerFunction() {

const[Counter,SetCount]=useReducer(reducer,initialstate);
const handleIncrement = useCallback(() => {
    SetCount('Increment');
    console.log('Increment Value:');

  }, []);

  const handleDecrement = useCallback(() => {
    SetCount('Decrement');
    console.log('Decrement Value:');

  }, []);
  const externalValue = 0;
  const handleReset = useCallback(() => {
    SetCount('Reset');
    console.log('External Value:', externalValue);
  },[externalValue]);

  return (
    <div>
        <h1>Count :{Counter}</h1>
        <button className='btn btn-dark p-1 m-1' onClick={()=>handleIncrement("Increment")}>Increment</button>
        <button className='btn btn-dark p-1 m-1' onClick={()=>handleDecrement("Decrement")}>Decrement</button>
        <button className='btn btn-dark p-1 m-1' onClick={()=>handleReset("Reset")}>Reset</button>

    </div>
  )
}


export default memo(UseReducerFunction);
