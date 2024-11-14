// import React from 'react'
// import '../CSS/Header.css'
// import { HashLink as Link } from 'react-router-hash-link';

// function Header() {
//   return (
//     <div className='Container'>
//       <nav className='nav-container'>
//         <Link to="#home">Home</Link>
//         <Link to="#about">About Me</Link>
//         <Link to="#skills">Skills</Link>
//         <Link to="#experience">Experience & Projects</Link>
//         <Link to="#contact">Contact</Link>
//       </nav>
//     </div>
//   )
// }

// export default Header;


import React, { useState } from 'react';
import '../CSS/Header.css';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='Container'>
      <nav className='nav-container'>
      <h2 className='h2_nav'> Portfolio</h2>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="#home">Home</Link>
          <Link to="#about">About Me</Link>
          <Link to="#skills">Skills</Link>
          <Link to="#experience">Experience & Projects</Link>
          <Link to="#contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
