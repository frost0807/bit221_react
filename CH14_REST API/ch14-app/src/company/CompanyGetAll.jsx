import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function CompanyGetAll() {
  const SERVER_URL='http:/localhost:8080/company/getOne'
  const [data, setData]=useState(0);

  const handleSubmit=(e)=>{
    console.log(data)

    axios({
      url:SERVER_URL,
      method:'get',
      data:data
    }).then(res=>console.log(res.data));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-center'>
          <h3>GetOne</h3>
          <input className='form-control w-25' type='text' placeholder='번호입력'
            name='number' onChange={(e) => { setData({ number: e.target.value }) }} />
          <button className='btn btn-danger' type='submit'>클릭</button>
        </div>
      </form>
    </div>
  )
}

export default CompanyGetAll