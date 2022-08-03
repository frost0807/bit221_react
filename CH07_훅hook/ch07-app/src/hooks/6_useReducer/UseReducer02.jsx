import React, { useReducer, useState } from 'react'

//자바로 따지면 enum형
const ACTION_TYPES={
  DEPOSIT:'deposit',
  WITHDRAW:'withdraw',
}

const reducer=(state,action)=>{
  console.log(state, action)
  //switch-case는 비교할 변수값을 한번만 읽어들이는 반면,
  // if-else는 비교 구문에 들어갈 때마다 변수값을 매번 새로 읽어들인다.
  switch (action.type){
    case ACTION_TYPES.DEPOSIT:
      return state+action.paylord;
    case ACTION_TYPES.WITHDRAW:
      return state-action.paylord;
    default:
      return state;
  }
};

function UseReducer02() {

  // const [상태변수, 변경함수]=useReducer(reducer, 0); [state,dispatch함수]
  const [money, setMoney]=useState(0);
  const [account,dispatch]=useReducer(reducer, 0);

  return (
    <div className='container'>
      <h6>useReducer 은행에 오신것을 환영합니다.</h6>

      <h2>잔고 : {account}</h2>
      <div className='row'>
        <input className='form-control offset-md-3 col-md-6'
          type={'number'}
          value={money}
          step='1000'
          onChange={(e)=>{setMoney(parseInt(e.target.value))}}/>
      </div>
      <div className='row'>
        <div className='offset-md-3 col-md-3 p-0'>
          {/* 데이터를 보낼때 여러가지 검증값 이외에 해당 값 그 자체를 paylord라고 부른다. */}
          <button className='btn btn-success w-100'
          onClick={()=>{dispatch({type:ACTION_TYPES.DEPOSIT, paylord:money})}}
          >예금</button>
        </div>
        <div className='col-md-3 p-0'>
          <button className='btn btn-danger w-100'
          onClick={()=>{dispatch({type:ACTION_TYPES.WITHDRAW, paylord:money})}}>출금</button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer02