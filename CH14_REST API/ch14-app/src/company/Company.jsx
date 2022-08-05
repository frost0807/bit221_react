import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function Company() {
  const SERVER_URL='http://localhost:8080/company';
  const [data, setData]=useState(
    {
      "companyName": "",
      "companyAddress": ""
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);

    axios({
      url:SERVER_URL,
      method:'post',
      data:data
    }).then(res=>console.log(res.data));
  }

  return (
    <div className='container mt-5'>
      <h3>Company</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-center'>
          <input className='form-control w-25' type="text" placeholder='회사명 입력'
            name='companyName' onChange={(e)=>{setData({...data, companyName:e.target.value})}}/>

          <input className='form-control w-50' type="text" placeholder='회사주소 입력'
            name='companyAddress' onChange={(e)=>{setData({...data, companyAddress:e.target.value})}}/>

          <button className='btn btn-danger' type='submit'>등록</button>
        </div>
      </form>
    </div>
  )
}

export default Company