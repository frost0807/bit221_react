import React from "react";
import Table from 'react-bootstrap/Table'

function Flex(props){
  return(
    <div>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>글 번호</th>
            <th>글 제목</th>
            <th>작성자</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>글 내용입니다.</td>
            <td>frost</td>
            <td>2022.07.26</td>
          </tr>
          <tr>
            <td>2</td>
            <td>글 내용입니다.</td>
            <td>frost</td>
            <td>2022.07.26</td>
          </tr>
          <tr>
            <td>3</td>
            <td>글 내용입니다.</td>
            <td>frost</td>
            <td>2022.07.26</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Flex;