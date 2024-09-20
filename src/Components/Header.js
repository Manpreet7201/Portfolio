import React from 'react'
// import { Link } from 'react-router-dom'
import '../CSS/Header.css'

function Header() {
  return (
    <div className='Container'>
      <nav className='nav-container'>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  )
}

export default Header;
