import React from 'react'
import Comment from './Comment';

const list=[{
  name:'Ken',
  comment:'안녕하세요? 루니입니다.',
  avatarUrl:'dogey.jpg'
},{
  
  name:'Tom',
  comment:'리액트를 배우고 있습니다.',
  avatarUrl:'cat.png'
},{
  
  name:'Calvin',
  comment:'안녕하세요?',
  avatarUrl:'dogey2.jpg'
},{
  
  name:'Annie',
  comment:'싱글이세요? 벙글입니다.',
  avatarUrl:'dogey3.jpg'
}];

function CommentList() {
  return (
    <>
      {
        list.map((data, idx) => {
          return(
            <Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl}/>
          )
        })
      }
    </>
  )
}

export default CommentList