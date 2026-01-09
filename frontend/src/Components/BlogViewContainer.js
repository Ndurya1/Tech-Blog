import React from "react";
import BlogContainer from "./BlogContainer";

export default function BlogViewContainer({title, imageUrl, description, children, author}){
    return(
        <>
         <div className="flex flex-col justify-center items-center text-left p-5 md:w-[800px] m-auto ">
            <h1 className="font-bold text-[31px] md:text-[50px]">{title}</h1>
            <p className="text-gray-700 text-justify mr-[218px] md:mr-[300px] p-1 pb-3">{author}</p>
            {imageUrl && <img src={imageUrl} alt={title} className="w-full object-cover md:h-[500px] md:w-[800px] rounded-xl my-5"/>}
           {description.map((para, i)=>(
            <p className="flex flex-col justify-center items-center text-justify text-[15px] text-gray-600" key={i}>{para}</p>
           ))}
            {children}
         </div>
        </>
    )
}