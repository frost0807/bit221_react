import React from 'react'
import { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    alert('입력한 이름: '+value);
    e.preventDefault();
  }

  const handleChange = (e) => {
    setValue(e.target.value)

    if (e.target.value.length > 8) {
      alert('8자 이상이어야 합니다.');
      setValue('');
      return;
    }
  }

  return (

    <>
      <label>
        <h4>Name : </h4>
        <input className='form-control' type='text'
          name='name'
          id='name'
          value={value}
          placeholder='input your name'
          onChange={handleChange} />
      </label>
      <button className='btn btn-success'>Submit</button>
    </>
  )
}

export default NameForm