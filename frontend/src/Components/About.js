import React from "react";


import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function About() {
    return (
       
            <div className=" flex flex-col justify-center items-center max-w-[1000px] p-2 text-left md:flex-row m-auto gap-5 md:justify-center   " id="About">

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
            </div>
        
    );
}
