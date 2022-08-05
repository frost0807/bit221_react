import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function App2() {
  const [posts, setPosts] = useState([]);

  // axios.get('https://jsonplaceholder.typicode.com/posts')
  // .then((res)=>{setPosts(res.data)})

  useEffect(()=>{
    axios({
      method:'get',
      url:'https://jsonplaceholder.typicode.com/posts',
    })
    .then((res)=>{
      setPosts(res.data);
      console.log("hello~~~");
    })
    .catch((e)=>{console.log(e)})
  }, []);

  return (
    <div>
      <table className='table' style={{fontSize:'1rem'}}>
        <thead>
          <tr>
            <th scope='col'>BoardId</th>
            <th scope='col'>UserId</th>
            <th scope='col'>Title</th>
            <th scope='col'>Content</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post,idx)=>{
              return(
                <tr key={idx}>
                  <th scope="row">{post.id}</th>
                  <th>{post.userId}</th>
                  <th>{post.title}</th>
                  <th>{post.body}</th>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App2