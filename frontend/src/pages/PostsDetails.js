import React from "react";  
import { useParams } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";    
import Footer from "../Components/Footer";
export default function PostsDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);     
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/blog/${id}/`, );
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
        

        <div className="flex flex-col justify-center ">
     <div className="flex m-2 border border-black w-fit rounded-full pr-3 ">
      <a href="/"><h1 className="flex justify-center items-center gap-2 text-[17px] font-bold "><span className="flex bg-green-600 p-2 rounded-lg rounded-l-full w-[50px] justify-center items-center h-[40px]">TSL</span> The Solitary Lens</h1></a>
     </div>

        <div className="flex flex-col justify-center items-center text-left p-5 md:w-[800px] m-auto ">
            <h1  className="font-bold text-[31px] md:text-[50px]">{post.title}</h1>
            <img className="w-full object-cover md:h-[500px] md:w-[800px] rounded-xl my-5" src={post.image} />
            <p className="flex flex-col justify-center items-center text-justify text-[15px] text-gray-600">{post.content}</p>
        </div>

         <span>  <hr className="border-none p-[0.7px] bg-black w-full "/></span>
                    <div className="scroll"><Footer /></div>
        </div>
        
    );
}