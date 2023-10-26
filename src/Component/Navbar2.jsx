import React from 'react'
import './Navbar2.css'
import { Link } from "react-router-dom";
import Card1 from './card1';


function Navbar2() {
  return (
    <div className='nav'>
        <div className='navbar2'>
      <h3>Typo</h3>
            <Link style={{color:"rgb(251, 254, 255)",marginLeft:"61vh"}} className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link style={{color:"rgb(251, 254, 255)"}} className="nav-item nav-link" to="/about">
              About
            </Link>
            <Link style={{color:"rgb(251, 254, 255)"}} className="nav-item nav-link" to="/form">
              Form
            </Link>
            <Link style={{color:"rgb(251, 254, 255)"}} className="nav-item nav-link" to="/speed">
              Typing Speed
            </Link>
            </div>
            <div className='line'></div>
            <div className='mid'>
            <h1>Discover. Learn. Enjoy</h1>
            <p>Platform to speed up typing speed</p>
            </div>
            
            
    </div>
  )
}

export default Navbar2
