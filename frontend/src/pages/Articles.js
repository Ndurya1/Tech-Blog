import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import travel from '../Assets/travel.jpg'

export default function Articles({posts}){

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

    return(
        <>
          {Array.isArray(displayPosts) && displayPosts.map((post) => (
          <div  className="article-container" key={post.id}>
            <img src={post.image} width={350} height={200}/>
             <div className="article-text">
             <h2>{post.title}</h2>
             <p>{post.summary}</p>
             </div>
             <h5><Link to="/PostsDetails" >View Article </Link></h5>
          </div>
          ))}
        </>
    )
}