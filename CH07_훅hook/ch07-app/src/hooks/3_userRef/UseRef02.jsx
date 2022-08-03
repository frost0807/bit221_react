import React, { useRef, useState } from 'react'

function UseRef02() {

  //State변수 사용
  const [count, setCount]=useState(0);
  //Ref변수 사용
  const countRef=useRef(0);

  //useRef는 값을 변화시켜줘도 자동으로 렌더링이 되지 않는다.
  const increaseCountState=()=>{setCount(count+1)}
  const increaseCountRef=()=>{
    countRef.current++;
    console.log('Ref=',countRef.current)
  }

  return (
    <div className='container'>
      <h3>State : {count}</h3>
      <h3>Ref&emsp; : {countRef.current}</h3>
      <button className='btn btn-info' onClick={increaseCountState}>
        State &nbsp;
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className='btn btn-success' onClick={increaseCountRef}>
        Ref &nbsp;  
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
 

    </div>
  )
}

export default UseRef02