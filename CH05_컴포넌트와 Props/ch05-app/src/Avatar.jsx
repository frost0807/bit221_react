import React from 'react'

const styles={
  avatar:{
    width:'50px',
    height:'50px',
    borderRadius:'50%'
  }
};

function Avatar(props) {
  return (
    <>
      <img src={props.url} alt='avatar-img' style={styles.avatar}/>
    </>
  );
}

export default Avatar