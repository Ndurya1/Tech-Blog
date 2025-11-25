import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import Navbar from "../Components/Navbar";

export default function Posts({ posts }) {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        if (!posts) {
            const fetchPosts = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:9000/blog/`);
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
          
            

            <h1>Posts</h1>
            <div className="post-container">
                {Array.isArray(displayPosts) && displayPosts.map((post) => (
                    <div key={post.id} className="post-card">
                        <img src={post.image} />

                       <div className="article-text"> <h3>{post.title}</h3>
                        <p>{post.summary}</p></div>
                        <h2>
                            <Link to={`/posts/${post.id}`}>View Full Blog</Link>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}