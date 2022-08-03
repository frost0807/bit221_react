import React from 'react'

//자식 컴포넌트에서 부모 컴포넌트에 값을 주려면 dispatch를 props로 받은다음 변화시키면 된다.
function Student({ id, name, isHere, dispatch1 }) {
  return (
    <div className='container'>
      <span style={
        {
          textDecoration: isHere ? 'none' : 'line-through',
          color: isHere ? 'white' : 'black',
          cursor: 'pointer',
        }
      }
        onClick={
          (e) => {
            dispatch1({ type: 'check-student', paylord: { id } })
          }
        }>{`${name}(${id})`}</span>
      <button className='btn btn-danger btn-sm p-1'
        onClick={() => {
          //dispatch 호출해서 삭제기능 수행
          dispatch1({ type: 'delete-student', paylord: { id } })
        }}
      >삭제</button>
    </div>
  )
}

export default Student