import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  //  const[data,setData]=useState(data.Email,data.Password);

  //  const setValidation=()=>{
    
  //  }
   const login=()=>{
    localStorage.setItem('login',true);
    Navigate('/');
   }
   const Navigate = useNavigate();
   useEffect(()=>{
       
    let log =  localStorage.getItem('login');
    if(!log){
      Navigate('/Login');
    }
},[Navigate]);
  return (
    <div className='d-flex justify-content-center m-2 p-2'>
      <form>
        <div className='d-flex justify-content-center m-2 p-2 '><h1>Login</h1></div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group d-flex justify-content-center m-2 p-2">
  <button type="button" className="btn btn-primary" onClick={login}>Submit</button>
  </div>
</form>
    </div>
  )
}

export default Login
