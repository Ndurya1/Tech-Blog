import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import About from "../Components/About";
import Footer from "../Components/Footer";
import Posts from "./Posts";
import axios from "axios";

import  { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero_section from "../Components/Hero_section";
// ...existing imports...

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
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMtdbHnE5D1l5Yk5o5r5j5j5j5j5j5j5j5j5j5j5j" crossOrigin="anonymous" />
                </Helmet>
            </HelmetProvider>
            
            <div >
                <Hero_section/>
              
            </div>

            
            <About />
            <div className="Featured-Posts">
                <Posts posts={posts.slice(0, 4)} />
            </div>
           
            <Footer />
        </>
    );
}