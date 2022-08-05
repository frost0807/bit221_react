import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

/**
 * ajax, fetch, axios
 * 
 */

/**
 * axios({}).then().catch();
 */

/**
 * (Representational State Tansfer)
 * 두 컴퓨터 시스템이 인터넷을 통해
 * 정보를 교환하기 위해 사용하는 인터페이스입니다.
 * HTTP Method : GET, POST, PUT, DELETE
 */

const MyImg=styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
`;

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos',

    }).then((res) => {
      setPosts(res.data)
    })
    .catch((e)=>{console.log(e)})
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className='d-flex' style={{ alignItems: 'center' }}>
          <img src='night2.jpg' style={{ width: 100, height: 100, borderRadius: 100 }} alt='' />
          <div className='d-flex ml-3'>
            <input className='form-control' />
            <button className='btn btn-danger'>Search</button>
          </div>
        </div>
        <div className='container'>
          <span style={{ color: '#eee' }}>{`Total ${posts.length}`}</span>
          <hr/>
          <table className='table text-light' style={{fontSize:'1rem'}}>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>ID</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>URL</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post, idx) => {
                  return (
                    <tr key={idx}>
                      <th scope='row'>{post.id}</th>
                      <td><MyImg src={post.thumbnailUrl} alt='' /></td>
                      <td>{post.title}</td>
                      <td>{post.url}</td>
                    </tr>
                  );
                })
              }

            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
