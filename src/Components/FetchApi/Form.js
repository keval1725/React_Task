import React, { useState } from "react";
import axios from 'axios';

// var arr = [];
const Form = () => {
  const [Data, SetData] = useState({
    name: "",
    number: "",
  });
  const [UserData, SetUserData] = useState({
    name: "",
    number: "",
  });
  const FormDatas = (event) => {
    const { name, value } = event.target;
    SetData({ ...Data, [name]: value });
  };

  const validate = ()=>{
    var NameRejx = "/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/";

  var NameTest =  NameRejx.test(Data.name);
  var NumberTest =  NameRejx.test(Data.number);

  if(!NameTest){
   
  }else if(!NumberTest)

  }
  const GetDetails = async (e) => {
    e.preventDefault();

    var Paylod = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(Data)
    }
    try{

      let Fetch = await axios.post('https://jsonplaceholder.typicode.com/posts',Paylod);
      console.log(Fetch.data.body,"dsd")
      SetUserData(Fetch.data.body);
    
    } catch(error){
      console.log(error);
    }
  
    // var data = JSON.parse(localStorage.getItem("data"));
    
    // if (data) {
    //  var NewData = data.Map(i=>i.name)
    //  NewData.push(Data)

    //   localStorage.setItem("data", JSON.stringify(data));

      
      
    // } else {
    //   arr.push(Data);

    //   localStorage.setItem("data", JSON.stringify(arr));
    // // }
  
    // console.log(JSON.parse(localStorage.getItem("data")))
  };

  return (
    <div className="d-flex justify-content-between">

        {/* <input type='text'  onChange={serchValue}></input> */}
      <form className="form" onSubmit={GetDetails}>
        <div>
          <h6>Title:</h6>
          <input
            type="text"
            className="form-control m-1"
            placeholder="Enter Your Name"
            name="name"
            value={Data.name}
            onChange={FormDatas}
          />
          <span></span>
        </div>
        <div>
          <h6>Body:</h6>
          <input
            type="number"
            className="form-control m-1"
            placeholder="Enter Your Body"
            name="number"
            value={Data.number}
            onChange={FormDatas}
          />
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-dark p-1 m-1"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
