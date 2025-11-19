import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from "axios";
import Navbar from "../Components/Navbar";

export default function Posts({ posts }) {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        if (!posts) {
            const fetchPosts = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/blog/`);
                    setAllPosts(response.data);
                } catch (error) {
                    console.error("Error fetching posts:", error);
                }
            };
            fetchPosts();
        }
    }, [posts]);

    const displayPosts = posts ? posts : allPosts;

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Posts</title>
                </Helmet>
            </HelmetProvider>
            

            <h1>Posts</h1>
            <div className="post-container">
                {Array.isArray(displayPosts) && displayPosts.map((post) => (
                    <div key={post.id} className="post-card">
                        <img src={post.image} />
                        <h3>{post.title}</h3>
                        <h2>
                            <Link to={`/posts/${post.id}`}>View Full Blog</Link>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}