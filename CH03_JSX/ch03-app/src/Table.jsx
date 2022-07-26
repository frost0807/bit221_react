import React from "react";
import Table from 'react-bootstrap/Table'

function Table1(props){
  return(
    <table striped bordered hover>
      <tr>
        <th>글 번호</th>
        <th>글 제목</th>
        <th>작성자</th>
        <th>작성일자</th>
      </tr>
      <tr>
        <td>{props.line1.id}</td>
        <td>{props.line1.title}</td>
        <td>{props.line1.writer}</td>
        <td>{props.line1.writtenDate}</td>
      </tr>
      <tr>
        <td>{props.line2.id}</td>
        <td>{props.line2.title}</td>
        <td>{props.line2.writer}</td>
        <td>{props.line2.writtenDate}</td>
      </tr>
      <tr>
        <td>{props.line3.id}</td>
        <td>{props.line3.title}</td>
        <td>{props.line3.writer}</td>
        <td>{props.line3.writtenDate}</td>
      </tr>
    </table>
  );
}

export default Table1;