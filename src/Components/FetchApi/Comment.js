import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './FirstPost.css'

function Comment() {
  let [search] = useSearchParams();

  const PostId = search.get('Postid');
  const [Data, SetData] = useState([]);
  const [page,SetPage]=useState(0);
  const [limit] = useState(3);
   const LoadMore=()=>{
   
    SetPage(page+limit);
   }

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (PostId) {
          const FetchPost = await axios.get(
            `https://jsonplaceholder.typicode.com/comments?postid=${PostId}&_page=${page}&_limit=${limit}`
          );
          const {data} = FetchPost;
          SetData([...Data,...data]);
       
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [PostId,page,limit]);
  

  return (
    <div className='container mt-4'>
      <h1 className='text-center mb-4'>Comments</h1>
      {Data.map((i) => (
        <div key={i.id} className='card mb-3'>
          <div className='card-body'>
            <h2 className='card-title'>{i.name}</h2>
            <h3 className='card-subtitle mb-2 text-muted'>{i.email}</h3>
            <p className='card-text'>{i.body}</p>
          </div>
        </div>
      ))}

    
      <div className='btn btn-info' onClick={LoadMore}>Lode More..</div>
    </div>
  );
}

export default Comment;
