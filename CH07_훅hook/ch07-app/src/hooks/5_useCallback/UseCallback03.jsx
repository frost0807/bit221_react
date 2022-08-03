import React, { useCallback, useState } from 'react'
import Box from './Box';

function UseCallback03() {
  const [size, setSize]=useState(100);
  const [isDark, setIsDark]=useState(false);

  const createBoxStyle=useCallback(()=>{
    return{
      backgroundColor:'yellowgreen',
      width:`${size}px`,
      height:`${size}px`
    }
  }, [size]);

  return (
    <div className='container' style={{background: isDark ? 'white':'black'}}>
      <button className='btn btn-info mb-1'
      onClick={()=>{setIsDark(!isDark)}}>Change Theme</button>
      <input className='form-control' type={'number'} value={size}
      onChange={(e)=>setSize(e.target.value)}
      />

      <br/>

      <Box createBoxStyle={createBoxStyle}/>
    </div>
  )
}

export default UseCallback03