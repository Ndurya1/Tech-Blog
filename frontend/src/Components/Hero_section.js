import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Hero_section(){

    return(
        <>
          <div  className="hero">

            <h1>TRAVEL & <span>TECH</span></h1>
            <p>what happens when a techie builds in public and travels? <br/> follow along to find out</p>

          <div className="buttons">
            <Link to="/posts" className="btn">Articles</Link>
            
            <span>|</span>
            
            <Link to="/gallery" className="btn"> Gallery</Link>
          </div>

          </div>
        </>
    )
}