import React from "react";
import BlogViewContainer from "../Components/BlogViewContainer";
import tech from '../Assets/tech.jpg'
import Solitude from '../Assets/solitude.jpg'
import loner from '../Assets/blog1.jpg'


export default function SolitudeBlog(){
   return(
    <div className="flex flex-col justify-center ">
     <div className="flex m-2 border border-black w-fit rounded-full pr-3 ">
      <a href="/"><h1 className="flex justify-center items-center gap-2 text-[17px] font-bold "><span className="flex bg-green-600 p-2 rounded-lg rounded-l-full w-[50px] justify-center items-center h-[40px]">TSL</span> The Solitary Lens</h1></a>
     </div>

         <BlogViewContainer
             title='I write in solitude: An account of a loner! '
             author='author: Ndurya'
             description={[
                'I write in solitude. Not because I hate people, NO! Infact I guess I am the most loving person you will ever meet. i write in solitude because I hate noise! The world is loud. We are sorrounded by constant noises everyday - opinions shouted, alerts pinging, inconsiderate views aired and information pressing in from all directions. In that noise, clarity is rare and reflection is almost impossible. I step back to observe, to think and to find patterns that might otherwise go unnoticed', <br/>,

                "Solitude is not emptiness, it's space. Space to step back and think without interruption, without worry or external influence, space to notice subtle connection, space to let ideas take shape on their own. When i'm alone with my thoughts, i discover the contours of my mind, the edges of my assumptions and experience moments that truly matter.", <br/>,

                "This blog is an attempt to share what i notice quietly. Technology, society, ideas - both complements and critic . They move too fast for cursory attention. I prefer to step back, observe and then write what has persisted in my mind long enough to be meaningful. Here, i do not compare forattention; I seek understanding.", <br/>,
                "I hope by reading this text provides a small pause for others as well and sets their mind to embress moments of solitude, moments to let their minds wander in imagination. Perhaps in silence, you too might see more clearly. This is not a call to withdraw from the world entirely, but an invitation to notice it with care, notice how it moves and deliberately  act with intention.", <br/>,

                " In a world that praises speed and noise, I choose reflection and solitude.I write not to be heard above the clamour, but to share the clarity that comes from stepping back. This is the beginning of a journey through observation, thought and quiet insight. Welcome to the Solitary Lens."


]}
             imageUrl={Solitude}/>
             
    </div>
   )
}