import React, {useEffect, useRef} from 'react'

/**
 * useRef()
 * 참조(Reference)를 사용하기 위한 훅
 * 반환값 : 레퍼런스 객체(ref object)
 * const ref = useRef(value) == {current:value}
 * ref.current
 * 
 * ref 객체는 컴포넌트의 전 생애주기 전체에 걸쳐서 유지
 * 컴포넌트가 재렌더링 되더라도 초기화되지 않는다
 * 
 * 어디다가 써 먹지??
 * 
 * 1. DOM 요소에 접근할때(document.querySelect(#))
 * 2. 저장공간으로 사용
 */

function UseRef01() {

  const inputRef=useRef();
  const imgRef=useRef();

  const onButtonClick=()=>{
    alert(`환영합니다 ${inputRef.current.value}`)
    imgRef.current.style.visibility='visible';
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <div className='container'>
      <img ref={imgRef} className='w-25' style={{width:'100px',marginBottom:'100px', visibility:'hidden'}} src='dogey.jpg' alt=''/>
      <div className='d-flex justify-content-center'>
        <form>
          <input ref={inputRef} className='form-control mb-2' type='text' placeholder='id'/>
          <input className='form-control' type={'text'} placeholder='password'/>
          <button className='btn btn-danger w-100'
            onClick={onButtonClick}>로그인</button>
        </form>
      </div>
    </div>
  )
}

export default UseRef01