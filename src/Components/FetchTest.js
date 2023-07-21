import React, { useState,useEffect,useContext } from 'react';
// import CounterParrents from './CounterParrents';
import TheamContext from './TheamContext';
import '../App.css';

function FetchTest() {
    const[search,SetSearch]=useState("");
    const[Data,SetData]=useState([]);
    const[filterdatas,setFilterdatas]=useState([]);
    const{IsDark} = useContext(TheamContext);


    const Fetchdata = async ()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                console.log(data);
                SetData(data);
           
            }catch(error){
                console.log(error)
            }
        }

        useEffect(() => {
          Fetchdata();
      },[]);
     
        const serchValue =(e)=>{
            SetSearch(e.target.value);
            filterData(search);
           
          }

     const filterData =  (search)=>{
        let  filtered;
         filtered = Data.filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.username.toLowerCase().includes(search.toLowerCase())||
              item.email.toLowerCase().includes(search.toLowerCase())||
              item.address.street.toLowerCase().includes(search.toLowerCase())
              )
             setFilterdatas(filtered);
             console.log(filtered,"dhdju")
        }
          
          return (
            <div className={IsDark?"dark container" :"light container"}>
        
            <input type="text" className="form-control w-25 mb-3" onChange={serchValue} placeholder='Serch Here'  />
            {/* <CounterParrents/> */}
            <table className="table table-striped border shadow">
              <thead className="border">
                <tr className="raw">
                  <th>id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Geo</th>
                </tr>
              </thead>
              <tbody>
                {filterdatas.length === 0 ? (
                  Data.map((i) => (
                    <tr class="raw" key={i.id}>
                      <td>{i.id}</td>
                      <td>{i.name}</td>
                      <td>{i.username}</td>
                      <td>{i.email}</td>
                      <td>{i.address.street}</td>
                      <td>{i.address.geo.lat}</td>
                    </tr>
                  ))
                ) : (
                  filterdatas.map((i) => (
                    <tr class="raw" key={i.id}>
                      <td>{i.id}</td>
                      <td>{i.name}</td>
                      <td>{i.username}</td>
                      <td>{i.email}</td>
                      <td>{i.address.street}</td>
                      <td>{i.address.geo.lat}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          )
     
}

export default FetchTest
