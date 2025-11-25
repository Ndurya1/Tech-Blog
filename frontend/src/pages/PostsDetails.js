import React from "react";  
import { useParams } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";    

export default function PostsDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);     
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:9000/blog/${id}/`);
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
              
                <h1>Loading...</h1>
                <p>Please wait while the post loads.</p>
            </div>
        );
    }

    return (
        <div>
           
           
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}