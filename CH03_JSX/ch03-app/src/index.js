import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Book from './Book';
import Table1 from './Table';
import Library from './Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/**Book import하면 렌더링 됨 */}
    <Book title='자바의 정석' page='600'
      imgUrl='http://image.kyobobook.co.kr/images/book/xlarge/032/x9788994492032.jpg'/>
    <Book title='리액트의 정석' page='300'
      imgUrl='http://image.kyobobook.co.kr/images/book/xlarge/032/x9788994492032.jpg'/>
    <Table1 con1='11' con2='22' con3='33' con4='44' con5='55' con6='66'/>
    <Library />
    <Table1 line1={{}}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
