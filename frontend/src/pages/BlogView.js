import React from "react";
import BlogViewContainer from "../Components/BlogViewContainer";
import tech from '../Assets/tech.jpg'
import solitary from '../Assets/solitary.jpg'


export default function BlogView(){
   return(
    <div className="flex flex-col justify-center ">
     <div className="flex m-2 border border-black w-fit rounded-full pr-3 ">
      <a href="/"><h1 className="flex justify-center items-center gap-2 text-[17px] font-bold "><span className="flex bg-green-600 p-2 rounded-lg rounded-l-full w-[50px] justify-center items-center h-[40px]">TSL</span> The Solitary Lens</h1></a>
     </div>

         <BlogViewContainer
             title='Through the Solitary Lens: On Learning to Be Seen'
             author='author: Ndurya'
             description={[
'I have spent years learning how to build things in silence.There is comfort in solitude - the clean logic of code, the predictability of systems, the way progress compounds when no one is watching. Alone, I can measure growth. Alone, effort feels pure. Through the solitary lens, the world becomes manageable.', <br/>,

'But, solitude, I’ve learned, is not the same as completeness.Most of my days pass in isolation, broken only by lectures and brief exchanges that never quite deepen. I move in and out of rooms without leaving much of myself behind. When I pause long enough to look around, a quiet truth emerges: I do not yet have people I can call day ones - those who know your early drafts, your unfinished thinking, your unpolished self.' ,<br/>,

'The moment this became undeniable was during a hackathon last year.I had the skills. I had ideas waiting to be shaped. What I didn’t have was a team. Not because no one was capable, but because I had never learned how to reach outward. So I opted out. That decision, small on the surface, revealed something structural beneath it: isolation had begun to cost me opportunities.', <br/>,

'We romanticize the lone thinker. The solitary builder. The individual who disappears and returns with brilliance. But reality is less poetic. Most meaningful work is relational. It is born in conversation, sharpened by disagreement, and sustained by shared belief.Solitude can refine thought but connection gives it direction.', <br/>,

'This year (2026), I am treating social skill not as a personality trait, but as a discipline. Something to be practiced, not feared. Initiating conversations without agendas. Learning to linger in moments instead of retreating from them. Allowing myself to be seen before I am fully ready.',<br/>,

'This is not a rejection of the solitary lens. It is an adjustment of its focus.I am learning that growth does not require abandoning solitude, but it does require opening the frame. Letting other people into the picture, accepting that no blueprint, no matter how well designed, stands on its own.',<br/>,

'This chapter is not about becoming louder or more visible.It is about learning how to belong without losing myself in the process.'
]}
             imageUrl={solitary}/>
    </div>
   )
}