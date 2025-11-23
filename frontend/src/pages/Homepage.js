import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import About from "../Components/About";
import Footer from "../Components/Footer";
import Posts from "./Posts";
import axios from "axios";
import travel from '../Assets/travel.jpg'
import tech from '../Assets/tech.jpg'
import destination from '../Assets/destination.jpg'

import  { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero_section from "../Components/Hero_section";
import Contacts from "../Components/Contacts";


export default function Homepage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts for featured section
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/blog/");
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Travel & Tech Blog Homepage</title>
                    <meta name="description" content="A blog about travel and technology. want to read through the mind of a travelling techie? i gat you! follow along to get the latest tech news and travel adventures" />
                    <meta name="keywords" content="travel, technology, AI, blogs, gallery" />
                    <meta name="author" content="Ndurya Muhammad" />
                   
                </Helmet>
            </HelmetProvider>
            
            <div >
                <Hero_section/>
              
            </div>
            <section className="bloginfo">
                <div className="bloginfocontainer">
                    <div className="blogtext">
                        <h2>Travel Guides</h2>
                        <p>Get travel insights before you plan for that end-of-year vacation or just a rewinding trip. get transport tips, clothing , gears and travel times to different destinations.</p>
                    </div>
                    <div className="blogimg" style={{objectFit:"cover", width:"full", height:"full", }}>
                        <img src={travel} alt="travelling packing"  width={400}  height= {300} style={{borderRadius:"8px"}}/>
                    </div>
                </div>

                <div className="bloginfocontainer">
                      <div className="blogimg" style={{objectFit:"cover", width:"full", height:"full", }}>
                        <img src={tech} alt="travelling packing"  width={400}  height= {300} style={{borderRadius:"8px"}}/>
                    </div>

                    <div className="blogtext">
                        <h2>Tech Trends</h2>
                        <p>stay updated with the latest innovations shaping the digital world. From AI breakthroughs and automations tools to new software, gadgets and coding practices. Explore simple, clear insights that help you stay ahead in today's fast-changing tech apace</p>
                    </div>
                  
                </div>

                <div className="bloginfocontainer">
                    <div className="blogtext">
                        <h2>Travel destinations</h2>
                        <p>Discover inspiring destinations, hidden gems and unforgettable experiences accross Kenya and bayond.We'll be reviewing the places for you to make the best decision!</p>
                    </div>
                    <div className="blogimg" style={{objectFit:"cover", width:"full", height:"full", }}>
                        <img src={destination} alt="travelling packing"  width={400}  height= {300} style={{borderRadius:"8px"}}/>
                    </div>
                </div>

            </section>

            
            <div className="Featured-Posts">
                <Posts posts={posts.slice(0, 4)} />
            </div>

            <About />
            <Contacts/>

           
            <Footer />
        </>
    );
}