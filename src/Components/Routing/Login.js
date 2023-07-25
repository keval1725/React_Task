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
    <div>
      <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="button" className="btn btn-primary" onClick={login}>Submit</button>
</form>
    </div>
  )
}

export default Login
