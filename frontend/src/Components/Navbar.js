import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

   
  return (
    <>
   
    
      <div className="navbar-container bg-transparent  ">
        <header className='navbar-header'>

    <div className="flex m-2 border-2 border-black w-fit rounded-full pr-3 cursor-pointer">
      <h1 className="flex justify-center items-center gap-2 text-[17px] font-bold "><span className="flex bg-green-600 p-2 rounded-lg rounded-l-full w-[50px] justify-center items-center h-[40px]">TSL</span> The Solitary Lens</h1>
     </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""} `} style={{color:"black"}}>
                <Link to="/">Home</Link>
                <a href="#Posts">Articles</a>
                 <a href="#About">About</a>
                 <a href="#Contacts">Contacts</a>
            </ul>
            
                 <div className="menu-toggle " onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
            </div>
        </header>
        </div>
    </>
  )
}

    
  

    