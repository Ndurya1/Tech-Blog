import React from "react";
import { Link } from "react-router-dom";

export default function BlogContainer({title, summary, author, imageUrl, children, cta}){
    return(
      
         <div className="flex  justify-center items-center m-auto rounded-lg border-2 border-green-600 shadow-md shadow-gray-700 w-[330px] md:w-[700px] gap-4 md:gap-10 h-full md:pr-10">

         {imageUrl && <img src={imageUrl} alt={title} className="rounded-l-lg w-[130px] h-[197px] object-cover md:w-[200px] "/>}

         <div className="flex flex-col text-justify p-2 w-full md:w-[420px] ">
            <p className="flex text-center font-bold text-[13px] ">{title}</p>
            <p className="text-gray-700 text-[12px]">{summary}</p><br/>

       <span>  <hr className="border-none p-[0.7px] bg-green-600 w-full md:w-[400px]"/></span>
            <div className="flex justify-center gap-7 items-center  p-2 mt-3 text-[13px] text-green-600 md:justify-evenly md:gap-10 cursor-pointer font-bold ">
                 <p>{author}  </p> 

                    {children}
        
            </div>
            
         </div>
        
       
       </div>
       
     
    )
}