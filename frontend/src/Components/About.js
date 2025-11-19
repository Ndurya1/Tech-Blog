import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>About Us - Travel & Tech Blog</title>
                <meta name="description" content="Learn more about our passion for travel and technology." />
              
                <meta name="author" content="Ndurya Muhammad" />
            </Helmet>
            <div className="about-section" id="About">

                <h2>About Us</h2>
                <p>Passionate about exploring the world and the latest in technology, I share stories from my journeys and insights on digital trends. Whether I’m hiking new trails or testing innovative gadgets, I love inspiring others to embrace adventure and stay ahead in the tech world. Join me as I discover new places and the tools that make travel smarter and more exciting!</p>
            </div>
        </HelmetProvider>
    );
}
