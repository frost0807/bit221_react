import React, { useState } from 'react'
import { useEffect } from 'react';

function Box(props) {
  const [style,setStyle]=useState({});

  useEffect(()=>{
    setStyle(props.createBoxStyle);
  },[props.createBoxStyle])

  return (
    <div style={style}>
    </div>
  )
}

export default Box