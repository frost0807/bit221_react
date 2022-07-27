import React, { useState } from 'react'

const UseState01 = () => {
  //구조 분해 할당으로 time과 setTime에
  const [time, setTime] = useState(1); // [state, setState]

  const handleClick=()=>{
    if(time<24){
      setTime(time+1);
    } else{
      setTime(1)
    }
  }
  console.log('렌더링...')

  return (
    <><form>
        <input type='text' placeholder='입력하세요'/>
      </form>
      <span>현재시각 : {time}시{time===24 &&'간이모자라'}</span>
      <button className='btn btn-danger' onClick={handleClick}>Update</button>
    </>
  )
}

export default UseState01