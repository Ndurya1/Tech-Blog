import React from "react";
import BlogViewContainer from "../Components/BlogViewContainer";
import tech from '../Assets/tech.jpg'
import Solitude from '../Assets/solitude.jpg'
import loner from '../Assets/blog1.jpg'


export default function TechMap(){
   return(
    <div className="flex flex-col justify-center ">
     <div className="flex m-2 border border-black w-fit rounded-full pr-3 ">
      <a href="/"><h1 className="flex justify-center items-center gap-2 text-[17px] font-bold "><span className="flex bg-green-600 p-2 rounded-lg rounded-l-full w-[50px] justify-center items-center h-[40px]">TSL</span> The Solitary Lens</h1></a>
     </div>

         <BlogViewContainer
             title='Project-based or tutorial-based learning?
                Why every beginner should build projects instead of watching tutorials '
             author='author: Ndurya'
             description={['When most people start learning how to code, especially self-taught ones, they fall into the same trap: watching tutorial after tutorial, hoping that the next will make everything click! I know that feeling – the excitement, the confusion, the urge to keep learning more before starting anything real.But here’s the truth: you won’t become a developer simply by consuming tutorials. You become one by building stuff.',<br/>,

'Here are some lessons many beginners learn late and the one that helped me progress faster in software development.',<br/>,
'The trap: tutorial hell.',<br/>,
'it often simply starts with a plan: learn HTML then CSS then Javascript, React.js a backend language, git and GitHub and more tutorials on end. Before you realize it, it’s 2-3 months down the drain with no real projects to show.', <br/>,
'The truth is tutorials give you knowledge not skills. Skills come from applying what you know.', <br/>,
 'Why tutorials alone aren’t enough.', <br/>,
'a)	They remove all challenges - everything is solved for you. The instructor has debugged and tested the project. You don’t get to learn the struggle (centering a div, resizing an image, importing an image to your project).', <br/>,
'b)	You don’t develop problem-solving muscle – tutorials don’t teach you how to think through real problems, only memorizing code. That’s not a developer’s job.', <br/>,
'c)	You get a false sense of progress – you feel productive before you’re learning but you aren’t applying your knowledge to solve real world problems.', <br/>,

 'What should you do then? ', <br/>,
'Build while you learn. Instead of waiting to feel ready, start building immediately. Do this as soon as you learn the concepts of web development, programming languages to use and the text editor you’ll be using.', <br/>,
'By building your own projects:', 
'.	You learn faster.', 
'.	You understand concepts deeply.', 
'.	You identify your weaknesses.', 
'.	You gain confidence.',  
'.	And above all you are able to track your progress.', 
'Every small win – fixing a bug, solving an error, adding a feature – grows your developer mindset.', <br/>,

'My Experience (And What You Might Relate To).', <br/>,
'Starting software development, I learnt React, Django, and how to build APIs. But the biggest growth happened not while watching tutorials , it happened when I built:',
'•	a personal website', 
'•	small CRUD apps', 
'•	mini backends', 
'•	simple marketplaces', 
'Suddenly the concepts became real, not just theory.', <br/>,

'How to Start Building ', 
'1. Choose a small project.', 
'Not Instagram. Not Amazon.', <br/>,
'Start with something manageable:', 
'•	A to-do app',
'•	Notes app', 
'•	Weather app', 
'•	Blog website', 
'•	Simple marketplace', 
'•	Login system', <br/>,
'2. Break it down.', 
'Take a blank paper and write:', 
'•	Pages', 
'•	Features', 
'•	Buttons', 
'•	What each part should do', <br/>,
'3. Learn only what you need.', 
'When you build, you stop learning blindly.', 
'You Google only what moves your project forward.', <br/>,
'4. Accept errors as part of the journey.', 
'Errors aren’t signs to quit , they’re the actual classroom. The more you debug the more experienced you become in your field. Future errors won’t scare you.', <br/>,

'Conclusion: Build > Learn > Build', <br/>,
'The fastest way to grow in tech is simple:', <br/>,
'•	Build something small', 
'•	Struggle with it ', 
'•	Find solutions', 
'•	Finish it', 
'•	Start the next one', 
'Tutorials are guides, not destinations.', 
'Your real progress begins the moment you start creating.'

            
]}
             imageUrl={tech}/>
    </div>
   )
}