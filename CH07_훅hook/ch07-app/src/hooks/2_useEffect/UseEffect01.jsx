import React, { useEffect, useState } from 'react'
/**클래스 컴포넌트 생명주기 함수
 * useEffect(콜백함수, 의존성배열[, , , ,])
 * 
 * useEffect(()=>{}, [의존성 변수1 ,변수2 , , ,])
 * 
 */
 const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}

//useEffect
let kiwis=[];
let carrots=[];

function UseEffect01() {

  const [count, setCount]=useState(0);

  useEffect(()=>{
    if(count===0){
      kiwis=['🥝'];
    } else {
      kiwis.push('🥝');
    }
    
    if(count===0){
      carrots=['🥕'];
    } else {
      carrots.push('🥕');
    }

    document.title=carrots+'update';
  },[count]);

  return (
    <div className='container' style={styles.container}>

      <span>{kiwis.toString().split(',').join('') + '키위' + count+'개'}</span>
      <hr></hr>
      <p className='h3'>You clicked {count} times</p>
      <hr />

      <button className='btn btn-info' style={styles.btn}
        onClick={() => {
          setCount(count + 1);
        }}>

        <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
        <br />
        <span>맛있는 키위 추가하기</span>
      </button>

    </div>

  )
}

export default UseEffect01