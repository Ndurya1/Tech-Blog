import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

   
  return (
    <>
   
    
      <div className="navbar-container">
        <header className='navbar-header'>
            <div className="navbar-logo" style={{display:"flex"}}>
                  <h1>Travel & Tech</h1>
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/Posts">Articles</Link>
                <Link to="/Gallery">Gallery</Link>
                 <Link to="/About">About</Link>
            </ul>
            
                 <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
            </div>
        </header>
        </div>
    </>
  )
}

    
  

    