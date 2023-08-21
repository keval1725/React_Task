import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  
} from 'mdb-react-ui-kit';

function Post() {
  let [search] = useSearchParams();
  let [Data, SetData] = useState([]);

  const userId = search.get('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const FetchPost = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
          );
          SetData(FetchPost.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userId]);

  // Function to group posts in pairs
  const groupInPairs = (arr, size) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += size) {
      pairs.push(arr.slice(i, i + size));
    }
    return pairs;
  };

  return (
    <div className='container my-4'>
      <h1 className='text-center mb-4'>Posts</h1>
      {groupInPairs(Data, 2).map((pair, index) => (
        <div key={index} className='row mb-4'>
        
          {pair.map((i) => (
            <div key={i.id} className='col-md-6'>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>{i.title}</MDBCardTitle>
                  <MDBCardText>{i.body}</MDBCardText>
                  <Link className='btn btn-info' to={`/Comment?Postid=${i.id}`}>Comment</Link>
                  
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Post;
