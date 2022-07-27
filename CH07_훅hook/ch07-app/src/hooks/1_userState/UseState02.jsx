import React, { useState } from 'react'

function UseState02(props) {

  const[input,setInput]=useState('');
  const[names,setNames]=useState([]);

  //event의 약자 e
  const inputChangeHandler=(e)=>{
    setInput(e.target.value);
    // console.log(input);
  }

const uploadHandler=()=>{
  setNames((preState)=>{
    console.log(preState);
    return [...preState, input]
  });
}

  return (
    <div className='container'>
      <form>
        <div className='row'>
          <div className='col-md-12 p-0 mb-3'>
            <input className='form-control' type='text' name='title' placeholder='제목입력' onChange={inputChangeHandler}/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-10 p-0'>
            <textarea className='form-control' name='content' placeholder='내용입력' rows='5' defaultValue={names.toString().split(',').join('\n')}></textarea>
          </div>
          <div className='col-md-2 pe-0'>
            <button className='btn btn-danger col-md-12 h-100' type='button' onClick={uploadHandler}>작성완료</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UseState02