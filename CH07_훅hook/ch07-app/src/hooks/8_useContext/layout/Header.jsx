import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './layout.css'

import {NavLink} from 'react-router-dom'

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    color: '#111',
    backgroundColor: '#eee',
    justifyContent: 'center',
  },
  h4: {
    marginLeft: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  ul: {
    width: 400,
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
};


function Header() {
  //컨텍스트 정보 가져오기
  const { isDark} = useContext(ThemeContext);

  const setDark = () => {
    return { ...styles.header, backgroundColor: '#333', color: '#eee' };
  };

  return (
    <>
      <header style={isDark ? setDark() : styles.header}>
        <img src='dogey.jpg' alt='' style={styles.avatar} />
        <h4 styles={styles.h4}>
          <i className="fa-solid fa-house-user ml-3"></i>
          Bitcamp
        </h4>

        <nav className='ml-5'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"js"}>JavaScript</NavLink>
          <NavLink to={"react"}>Reacts</NavLink>
          <NavLink to={"java"}>Java</NavLink>
          <NavLink to={"sb"}>Springboot</NavLink>
        </nav>

      </header>
    </>
  )
}

export default Header