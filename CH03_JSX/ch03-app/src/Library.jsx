import React from "react";
import Book from "./Book";

function Library(props){
  return(
    <div>
      <Book title="파이썬이 제일 쉬웠어요" page="100"
        imgUrl="https://blog.kakaocdn.net/dn/bkW9WF/btqUUqEfEIe/DPIdxrtKafxzW1fjbhO1K1/img.png"/>
      <Book title="파이썬이 제일 쉬웠어요" page="150"
        imgUrl="https://blog.kakaocdn.net/dn/bkW9WF/btqUUqEfEIe/DPIdxrtKafxzW1fjbhO1K1/img.png"/>
      <Book title="파이썬이 제일 쉬웠어요" page="200"
        imgUrl="https://blog.kakaocdn.net/dn/bkW9WF/btqUUqEfEIe/DPIdxrtKafxzW1fjbhO1K1/img.png"/>
    </div>
      );
};

export default Library;