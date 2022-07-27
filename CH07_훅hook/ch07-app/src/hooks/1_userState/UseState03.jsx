import React, { useState } from 'react'

function useState03() {

  const[count, setCount]=useState(1);

  // const clickFunction=()=>{
  //   const str='';
  //   setCount(count+1);
  // }

  return (
    <>
      <div>You Clicked {count} times</div>
      {/* onClick function을 따로 선언하지 않고 내부에서 바로 사용가능하다 */}
      <button className='btn btn-info pt-3 pb-2' onClick={() => {
        setCount(count + 1);
      }}
      >
        <i className="fa-solid fa-computer-mouse fa-2xl"></i>
        <p className='mb-0 mt-2'>Click me</p>
      </button>
    </>
  )
}

export default useState03