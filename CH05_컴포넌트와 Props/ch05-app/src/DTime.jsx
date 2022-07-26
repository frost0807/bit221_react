import React from 'react'

function DTime() {
  let dd=new Date().toLocaleDateString();
  let tt=new Date().toLocaleTimeString();

  return (
    <div>
      {dd+" "+tt}
    </div>
  )
}

export default DTime