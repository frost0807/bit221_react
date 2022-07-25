import React from "react";

function Book(props){
  let info={
    color:'white',
    backgroundColor:'orange',
    display:'flex'
  };
  let img={
    width:'150px',
    borderRadius:'50px',
    marginRight:'50px'
  }
  let urlImg='http://image.kyobobook.co.kr/images/book/xlarge/032/x9788994492032.jpg'

  return(
    <div style={info}>
      <img src={`${props.imgUrl}`} style={img}/>
      <div>
        <h2>{`이 책의 이름은 ${props.title}입니다.`}</h2>
        <h3>{`이 책은 총 ${props.page} 입니다.`}</h3>
      </div>
    </div>
  );
};

export default Book;