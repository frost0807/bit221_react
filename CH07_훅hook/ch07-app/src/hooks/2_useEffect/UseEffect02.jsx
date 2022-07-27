import React, { useEffect, useState } from 'react'

function UseEffect02() {

  const [count, setCount]=useState(0);
  const [name, setName]=useState('NickName');
  const test='';

  const updateInput=(e)=>{
    setName(e.target.value);
  }

  const updateCount=(e)=>{
    setCount(count+1);
  }

  useEffect(()=>{
    console.log('렌더링')
  }, [test])

  //마운팅 && count가 바뀔때마다 실행

  return (
    <div className='container'>
      <p>Count:{count}</p>
      <button className='btn btn-danger' onClick={updateCount}>Update</button>
      <div>
        <input type='text' onChange={updateInput}/>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default UseEffect02