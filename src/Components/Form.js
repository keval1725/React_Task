import React, { useState } from "react";


var arr = [];
const Form = () => {
  const [Data, SetData] = useState({
    name: "",
    number: "",
  });
  const FormDatas = (event) => {
    const { name, value } = event.target;
    SetData({ ...Data, [name]: value });
  };

  const GetDetails = (e) => {
    e.preventDefault();

    var data = JSON.parse(localStorage.getItem("data"));
    
    if (data) {
     var NewData =   data.Map(i=>i.name)
     NewData.push(Data)

      localStorage.setItem("data", JSON.stringify(data));

      
      
    } else {
      arr.push(Data);

      localStorage.setItem("data", JSON.stringify(arr));
    }
  
    console.log(JSON.parse(localStorage.getItem("data")))
  };

  return (
    <div className="d-flex justify-content-between">

        <input type='text'  onChange={serchValue}></input>
      <form className="form" onSubmit={GetDetails}>
        <div>
          <h6>Name:</h6>
          <input
            type="text"
            className="form-control m-1"
            placeholder="Enter Your Name"
            name="name"
            value={Data.name}
            onChange={FormDatas}
          />
        </div>
        <div>
          <h6>Number:</h6>
          <input
            type="text"
            className="form-control m-1"
            placeholder="Enter Your Number"
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
