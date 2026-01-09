import React from "react";
import BlogContainer from "./BlogContainer";
import {motion} from 'framer-motion'

export default function BlogViewContainer({title, imageUrl, description, children, author, delay=0}){
    return(
        <>
          <motion.div
          initial={{opacity:0, y:70, }}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, ease:'easeOut', delay:delay}}
                viewPort={{once:true, amount:0.9}}
                
                className="flex flex-col justify-center items-center text-left p-5 md:w-[800px] m-auto ">
            <h1 className="font-bold text-[31px] md:text-[50px]">{title}</h1>
            <p className="text-gray-700 text-justify mr-[218px] md:mr-[300px] p-1 pb-3">{author}</p>
            <motion.div
          initial={{opacity:0, x:30,scale:0.8}}
                whileInView={{opacity:1, x:0, scale:1}}
                transition={{duration:0.9, ease:'easeOut', delay:delay}}
                viewPort={{once:true, amount:0.9}}> {imageUrl && <img src={imageUrl} alt={title} className="w-full object-cover md:h-[500px] md:w-[800px] rounded-xl my-5"/>}
                </motion.div>
                 <motion.div
          initial={{opacity:0, y:70}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.9, ease:'easeOut', delay:delay}}
                viewPort={{once:true, amount:0.5}}> 
           {description.map((para, i)=>(
            <p className="flex flex-col justify-center items-center text-justify text-[15px] text-gray-600" key={i}>{para}</p>
           ))}
           </motion.div>
            {children}
         </motion.div>
        </>
    )
}