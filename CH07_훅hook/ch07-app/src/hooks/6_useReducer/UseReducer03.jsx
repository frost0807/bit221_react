import React, { useReducer, useState } from 'react'
import Student from './Student'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-student':
      const name = action.paylord.name;
      const newStudent = {
        id: Date.now(),
        name: name,
        isHere: true,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      }

    case 'delete-student':
      return {
        count: state.count - 1,
        students: state.students.filter(student => student.id !== action.paylord.id)
      };

      case 'check-student':
        return{
          count:state.count,
          students:state.students.map((student)=>{
            if(student.id===action.paylord.id){
              return {...student, isHere:!student.isHere} 
            }
            return student;
          })
        }

        default:
          return state;
  }
}

const initialState={
  count:1,
  students:[
    {
      id:Date.now(),
      name:'Tom',
      isHere:true,
    },
  ],
}

function UseReducer03() {
  const [name, setName]=useState('');
  const [studentInfo, dispatch]=useReducer(reducer, initialState);

  return (
    <div className='container'>
      <div className='alert alert-info'>
        <div>
          <i className="fa-solid fa-book"></i>
          &nbsp;출석부
        </div>
        <hr />
        <p>총 학생수 : {studentInfo.count}명</p>
        <div>
          <input className='form-control'
            placeholder='이름을 입력해주세요'
            spellCheck='false'
            onChange={(e) => { setName(e.target.value) }}
          />
          <button className='btn btn-success mt-3'
            onClick={(e) => {
              if (name === '') {
                alert('이름을 입력해주세요');
                return;
              }
              dispatch({ type: 'add-student', paylord: { name } });
            }}>추가</button>
        </div>
      </div>
      {
        studentInfo.students.map(student=>{
          return <Student 
          //맵함수를 돌릴때 react가 인식하게 하려면 고유의 key값을 넣어주어야 한다.
          key={student.id}
          id={student.id}
          name={student.name}
          isHere={student.isHere}
          dispatch1={dispatch}/>
        })
      }
    </div>
  )
}

export default UseReducer03