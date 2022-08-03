import React from 'react'
import { useState } from 'react';

function FruitSelect() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    alert('선택한 음식: ' + value);
    e.preventDefault();
  }

  return (
    <form>
      <label>
        <h5>음식을 선택하세요 : </h5>
        <select className='form-select'>
          <option value='kiwi'>🥝</option>
          <option value='carrot'>🥕</option>
          <option value='watermelon'>🍉</option>
          <option value='grape'>🍇</option>
          <option value='banana'>🍌</option>
        </select>
      </label>
      <button className='btn btn-success ms-1' type='submit'>선택</button>
    </form>
  )
}

export default FruitSelect