import React, { useState } from 'react';
import './navbar.css';
import { SiGoogleearth } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

function Navbar() {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const hideNav = () => {
    setActive('navBar');
  };
  
  const [transparent, setTransparent] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)
  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <a href="a" className="logo">
            <h1 className="flex">
              <SiGoogleearth className="icon" />
              HABIBI TRAVEL
            </h1>
          </a>
        </div>
        
        <div className={active}>
          <ul className="navlists flex">
            <li className="navItem">
              <a href="a" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="a" className="navLink">Product</a>
            </li>
            <li className="navItem">
              <a href="a" className="navLink">Resources</a>
            </li>
            <li className="navItem">
              <a href="a" className="navLink">Contact</a>
            </li>
            <li className="navItem">
              <a href="a" className="navLink">Blog</a>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn signupBtn">
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>
          
          <div className="closeNavbar" onClick={hideNav}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
