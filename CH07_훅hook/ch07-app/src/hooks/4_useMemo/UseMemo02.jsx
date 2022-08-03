import React, { useMemo, useState } from 'react'

const hardCalculate=(number)=>{
  let total=0;

  for(let i=0;i<number*10000;i++){
    for(let j=0;j<number*10000;j++){
      total+=i+j+i*j;
    }
  }
  console.log("계산");
  

  return total;
}

const easyCalculate=(number)=>{
  console.log('간단한 계산!')
  return number+1;
};

function UseMemo02() {

  const [hardNumber, setHardNumber]=useState(0);
  const [easyNumber, setEasyNumber]=useState(0);

  const hard=useMemo(()=>{
    return hardCalculate(hardNumber);
  },);

  const easy=easyCalculate(easyNumber);

  return (
    <div className='container'>
      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Hard working</h5>
        <input
          className='form-control' type='number'
          value={hardNumber}
          onChange={(e) => setHardNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> ∫∛ ∝^ = {hard}</span>
      </div>
      <div style={{ border: '1px solid blue', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Simple working</h5>
        <input
          className='form-control' type='number'
          value={easyNumber}
          onChange={(e) => setEasyNumber(parseInt(e.target.value))}
        />
        <hr />
        <span> 1 + INPUT = {easy}</span>
      </div>
    </div>
  )
}

export default UseMemo02