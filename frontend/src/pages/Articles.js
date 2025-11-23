import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from "axios";
import travel from '../Assets/travel.jpg'

export default function Articles(){

  const [article, setArticle] = useState([]);

  useEffect(()=>{
    const fetchArticle=async()=>{
     try {
        const response= await axios.get(`http://127.0.0.1:9000/blog/`, setArticle)
     } catch (error) {
      console.error("error fetching articles", error);
      
     }
    }; 
    fetchArticle();
  
  },[]);

    

  

    return(
        <>
          <div key={post.id} className="article-container">
             <img src={travel} alt="travel destination in morrocco" width={350} height={200} />
             <p>{post.image}</p>
             <div className="article-text">
                <h2> Planning to travel? here's what you should know {post.title}</h2>
                
                <p>You dont just wake up and trael to a place. you start by doing research, budgeting for accommodation, transport etc. this article is a perfect guide  for people planning to go on vacations</p>
                <p>{post.summary}</p>
             </div>
             <h5><Link to="/PostsDetails" >View Article </Link></h5>
          </div>
        </>
    )
}