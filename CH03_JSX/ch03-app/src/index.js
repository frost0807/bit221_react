import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Book from './Book';
import Table1 from './Table';
import Library from './Library';

let list={line1:{id:1,title:'제목1',writer:'frost',writtenDate:'220726'},
  line2:{id:2,title:'제목2',writer:'frost',writtenDate:'220726'},
  line3:{id:3,title:'제목3',writer:'frost',writtenDate:'220726'}}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/**Book import하면 렌더링 됨 */}
    <Table1 line1={list.line1} line2={list.line2} line3={list.line3}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
