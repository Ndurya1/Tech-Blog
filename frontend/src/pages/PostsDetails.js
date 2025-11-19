import React from "react";  
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from "axios";
import { useState, useEffect } from "react";    

export default function PostsDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);     
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/blog/${id}/`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) {
        return (
            <div>
                <HelmetProvider>
                    <Helmet>
                        <title>Loading...</title>
                    </Helmet>
                </HelmetProvider>
                <h1>Loading...</h1>
                <p>Please wait while the post loads.</p>
            </div>
        );
    }

    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>{post.title}</title>
                </Helmet>
            </HelmetProvider>
           
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}