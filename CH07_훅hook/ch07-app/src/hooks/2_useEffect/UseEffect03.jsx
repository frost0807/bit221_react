import React, { useEffect, useState } from 'react'
import Timer from './Timer'


function UseEffect03() {

  const [message, setMessage]=useState('시작');
  const [showTimer, setShowTimer]=useState(false);
  const [btn, setBtn]=useState('btn btn-info');

  useEffect(()=>{
    
  },[setShowTimer])

  return (
    <div className='container'>
      <button className={btn}
        onClick={() => {
          setShowTimer(!showTimer);
          setBtn(!showTimer ? 'btn btn-danger':'btn btn-info');
          setMessage(showTimer ? '시작':'정지')
        }}>
        <i className="fa-solid fa-stopwatch"></i><span className='ml-2' />
        {message}
      </button>
      <hr />
      {
        showTimer && <Timer />
      }
    </div>
  )
}

export default UseEffect03