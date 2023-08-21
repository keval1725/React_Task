import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function FetchTest() {
  const [search, setSearch] = useState("");
  const [Data, SetData] = useState([]);
  const [filterdatas, setFilterdatas] = useState([]);
  const [TotalCount, SetCount] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const limit = 3;
 
  useEffect(() => {
    (async () => {
      try {
        const TotalDatas = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        SetCount(TotalDatas.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    const Tdata = new Int32Array(Math.ceil(TotalCount.length / limit));
    setTotalPage(Tdata.length);
  }, [TotalCount]);

  useEffect(() => {
    (async () => {
      try {
        const offset = limit * (currentPage - 1);
        const totalPages = Math.ceil(totalPage / limit);
       
        const paginatedItems = TotalCount.slice(offset, limit * currentPage);
    
        console.log(paginatedItems);
     
        SetData(paginatedItems);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currentPage]);

  const Pagination=()=>{

  }


  useEffect(() => {
    const filterData = () => {

      if (search !== '') {
        
        const filtered = TotalCount.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) ||
            item.address.street.toLowerCase().includes(search.toLowerCase())
  
            );
            console.log(filtered)
        setFilterdatas(filtered);
      }else{
        const filtered = Data.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.username.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) ||
            item.address.street.toLowerCase().includes(search.toLowerCase())
  
            );
            console.log(filtered)
        setFilterdatas(filtered);
      }
    };

    filterData();
  }, [search]);

  const serchValue = (e) => {
      setSearch(e.target.value);
  };

  const Next = () => {
    if (currentPage >= totalPage) {
      setCurrentPage(currentPage);
         } else if (currentPage >= 1) {
      
      setCurrentPage(currentPage + 1);
         }
  };

  const Previous = () => {
    if (currentPage <= 1) {
            setCurrentPage(currentPage);
    
    } else if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    
    }
  };

 
 return (
            <div >
        
            <input type="text" className="form-control w-25 m-3" onChange={serchValue} placeholder='Serch Here'  />
           
           
            <table className="table table-striped border shadow">
              <thead className="border">
                <tr className="raw">
                  <th>id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>AllPost</th>
                  <th>FirstPost</th>

                  
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
                      <td><Link className='navbar-brand' to={`/Post?id=${i.id}`}>AllPost</Link></td>
                      <td><Link className='navbar-brand' to={`/FirstPost?id=${i.id}`}>FirstPost</Link></td>

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
                      <td><Link className='navbar-brand' to={`/Post?id=${i.id}`}>AllPost</Link></td>
                      <td><Link className='navbar-brand' to={`/FirstPost?id=${i.id}`}>FirstPost</Link></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
            <div className="pagination ">
          
          <button className='btn btn-info'  onClick={(e)=>Previous(e.target)} >Previous</button>
          <h5 className='p-1'>Show:{currentPage} of Total :{totalPage}</h5>
       
          <button className='btn btn-dark' onClick={(e)=>Next(e.target)} >Next</button>
          <button className='btn btn-dark' onClick={Pagination} >Pagination</button>
          </div>
          </div>
          
          )
}

export default FetchTest;
