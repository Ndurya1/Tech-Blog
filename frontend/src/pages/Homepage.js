import React from "react";
import { Link } from "react-router-dom";

import About from "../Components/About";
import Footer from "../Components/Footer";
import Posts from "./Posts";
import axios from "axios";
import travel from '../Assets/travel.jpg'
import tech from '../Assets/tech.jpg'
import destination from '../Assets/destination.jpg'
import Solitude from '../Assets/solitude.jpg'
import loner from '../Assets/blog1.jpg'
import solitary from '../Assets/solitary.jpg'
import hero from '../Assets/HeroImage.jpg'
import Solo2 from '../Assets/Solo2.jpg'

import {FiArrowRight} from 'react-icons/fi'
import { FiChevronsRight } from "react-icons/fi";

import  { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Hero_section from "../Components/Hero_section";
import Contacts from "../Components/Contacts";
import BlogContainer from "../Components/BlogContainer";
import BlogViewContainer from "../Components/BlogViewContainer";


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
        <div className=" " >

            <div className="home-scroll   bg-gray-300 shadow-xl mb-10 ">
            <div className=" absolute z-10 inset-0   ">
                  <Navbar />
            </div>
           <div  className="  w-[330px] md:w-[1000px] rounded-b-[25px] relative shadow-xl shadow-gray-900 h-[60vh]  m-auto md:h-[80vh] flex items-center justify-center bg-black overflow-hidden">
             <img src={Solo2} alt="tech & travel photo" className="   w-full  absolute h-full rounded-b-[25px] justify-center items-center m-auto  inset-0 shadow-xl shadow-gray-900 object-cover  position-center "  />
           </div>

            <div className="flex flex-col justify-center items-center m-auto p-2 text-white md:flex md:flex-row md:justify-center md:gap-10 md:p-10">
               <h1 className=" title flex flex-col text-black mt-4 text-[27px] md:text-[30px] font-bold text-justify">The Solitary Lens<br/> <span className="text-[22px] md:text-[26px] text-green-600  ">I write from Solitude, not silence </span></h1>
                  
                <p className="text-gray-600 md:text-[12px] text-left p-2 md:w-[350px] ">I think best at a distance. Solitude gives me the space to question, to doubt and to refine ideas without pressure. The Solitary Lens is not a reaction to the world, but a careful observation of it - measured, deliberate and quiet.</p>
             </div>

            </div>
           
          
                
             <div id="Posts" className="flex flex-col justify-center items-center gap-5 mb-5">
                 <BlogContainer 
              
              title='I write in solitude: An account of a loner!  '
              summary='In a world that praises speed and noise, I choose reflection and solitude. I write not to be heard above the clamour, but to share the clarity that cpmes from stepping back'
              imageUrl={Solitude}
              author='author: Ndurya'
              cta='read'
              > <p className=" flex flex-col justify-center items-center text-left text-green-600  hover:text-blue-900 "><a href="/SolitudeBlog">Read</a></p> </BlogContainer>

              <BlogContainer
              
              title='Through the Solitary Lens: On Learning to Be Seen '
              summary='This year (2026), I am treating social skill not as a personality trait, but as a discipline. Something to be practiced, not feared. Initiating conversations without agendas. Learning to linger in moments instead of retreating from them. Allowing myself to be seen before I am fully ready.'
              imageUrl={solitary}
              author='author: Ndurya'
              cta='read'
              > <p className=" flex flex-col justify-center items-center text-left text-green-600  hover:text-blue-900 "><a href="/BlogView">Read</a></p></BlogContainer>
              
              <BlogContainer
              
              title='Project-based or tutorial-based learning?
                Why every beginner should build projects instead of watching tutorials
 '
              summary='
                Most beginners fall into “tutorial hell,” watching endless coding tutorials without building real projects.
                Tutorials teach knowledge, but skills and problem-solving come from actually creating things.
                This blog offers insights into the best approach for learning to code effectively.
               
                
'
              imageUrl={tech}
              author='author: Ndurya'
              cta='read'
              ><p className=" flex flex-col justify-center items-center text-left text-green-600  hover:text-blue-900 "><a href="/TechMap">Read</a></p> </BlogContainer>

              

             </div>

             <div className="flex  justify-center  font-bold text-[20px] items-right gap-2 m-auto  text-left items-left text-gray-900 w-fit ml-[240px] md:ml-[900px]  bg-green-100 px-3 p-1 rounded-full border border-green-700 hover:bg-transparent hover:text-green-600  " >
                 <Link to="/Posts">More</Link> <a href="/Posts"><FiChevronsRight className="flex justify-center items-center mt-1 text-[22px]"/></a>
                  
            </div>

            
            {/*<div className="Featured-Posts">
                <Posts posts={posts.slice(0, 4)} />
            </div> */}

            <div id="About" className="scroll bg-gray-300 shadow-xl md:h-[310px] flex flex-col justify-center items-center mb-5">   <div className=" flex flex-col justify-center items-center max-w-[1000px] p-2 text-left md:flex-row m-auto gap-5 md:justify-center  " >

                <div className="flex flex-col justify-center m-auto p-2">
                <h2 className="text-black text-[20px] font-bold ">About </h2>
                <p className="text-[16px] text-gray-700 md:w-[350px] m-auto  ">Passionate about exploring the world and the latest trends in technology, I share stories from my journeys and insights on digital trends, local politics,religion, news, automobiles etc. Whether I’m hiking new trails or testing innovative gadgets, I love inspiring others to embrace adventure and stay ahead in the tech world. I write what i like through my own point of view!</p>
                </div>

                <div  className="flex flex-col justify-center m-auto p-2 gap-3">
                <h2 className="text-black text-[20px] font-bold ">Career</h2>
                <p className="text-[12px] text-gray-700 ">A fullstack Developer with hands-on experience building end-to-end web applications using Django, PostgreSQL, React.js and javascript. Skilled in designing restful backends, implementing database-driven fetures and developing responsive, user-focused frontends. <br/>
                Experienced in CRUD operations, authenticatio workflows, SEO optimisation and deployment of production-ready applications.</p>
                <button className="flex w-[150px] p-3 rounded-lg bg-green-800 text-[15px] font-bold text-gray-200 shadow-xl shadow-gray-400 text-center justify-center hover:bg-transparent hover:text-black hover:border-[1px] hover:border-black cursor-pointer  "> <a href='https://nduryamuhammad.vercel.app'>Portfolio</a></button>
               
                </div>
            </div></div>
          
           <div className="contacts" id="Contacts" > <Contacts/></div>

           <span>  <hr className="border-none p-[0.7px] bg-black w-full "/></span>
            <div className="scroll"><Footer /></div>
        </div>
    );
}