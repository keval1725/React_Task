import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function FirstPost() {
  let [search] = useSearchParams();
  const [Data, SetData] = useState([]);
  const [Comment, setComment] = useState([]);

  const userId = search.get('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const FetchPost = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=1`
          );
          SetData(FetchPost.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const fetchComment = async () => {
      try {
        if (userId) {
          const FetchPost = await axios.get(
            `https://jsonplaceholder.typicode.com/comments?postId=1&_page=1&_limit=3`
          );
          setComment(FetchPost.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchComment();
  }, [userId]);

  return (
    <div className="container mt-4">
      <h1 className="text-center">First Post</h1>
      {Data.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <div className="post-image-container">
              <image
                src="https://shutterflywpe.wpenginepowered.com/wp-content/uploads/2017/12/creative-instagram-photo-ideas_something-simple-1.jpg"
                className="img-fluid rounded-top post-image"
                alt="Post Image"
              />
            </div>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      ))}

      <h2 className="mt-4">Comments</h2>
      {Comment.map((comment) => (
        <div key={comment.id} className="card mb-3">
          <div className="card-body">
            <h2 className="card-title">{comment.name}</h2>
            <h5 className="card-subtitle mb-2 text-muted">{comment.email}</h5>
            <p className="card-text">{comment.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FirstPost;
