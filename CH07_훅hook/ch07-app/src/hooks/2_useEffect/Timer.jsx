import React, { useEffect } from 'react'

function Timer() {

  useEffect(()=>{
    const updateTimer=setInterval(()=>{
      console.log('⏱️');
    }, 1000);

    //마운트 해제시 실행 정지
    //

    //언마운트시 처리작업
    return ()=>{
      clearInterval(updateTimer);
      console.log('타이머 종료');
    }
  }, []); //마운트 && 언마운트 시 처리완료

  return (
    <div>타이머가 시작되었습니다.</div>
  )
}

export default Timer