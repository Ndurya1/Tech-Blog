import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";
import Footer from "../Components/Footer";

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
         <div className="flex flex-col justify-center ">
     <div className="flex m-2 border border-black w-fit rounded-full pr-3 ">
      <a href="/"><h1 className="flex justify-center items-center gap-2 text-[17px] font-bold "><span className="flex bg-green-600 p-2 rounded-lg rounded-l-full w-[50px] justify-center items-center h-[40px]">TSL</span> The Solitary Lens</h1></a>
     </div>
          
            <div >
                {Array.isArray(displayPosts) && displayPosts.map((post) => (
             <div key={post.id}  className="flex  justify-center items-center m-auto rounded-lg border-2 border-green-600 shadow-md shadow-gray-700 w-[340px] md:w-[700px] gap-4 md:gap-10 h-[200px] md:pr-10" >
                        <img src={post.image}  className="rounded-l-lg w-[130px] h-[197px] object-cover md:w-[200px] "/>

                       <div className="article-text flex flex-col text-justify p-2 ">
                         <h3  className="flex text-center font-bold text-[13px] ">{post.title}</h3>
                        <p  className="text-gray-700 text-[12px]">{post.summary}</p>
                        </div>
                        <h2 className="text-[14px] font-bold p-1 bg-green-200 hover:text-green-600 rounded-full px-5 border-2 border-green-600 hover:bg-transparent">
                            <Link to={`/posts/${post.id}`}> Read </Link>
                           
                        </h2>
                    </div>
                    
                ))}
                
            </div>
             <span>  <hr className="border-none p-[0.7px] bg-black w-full "/></span>
                        <div className="scroll"><Footer /></div>
        </div>
    );
}