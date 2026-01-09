import React from "react";
import axios from "axios";
import {useEffect, useState} from 'react'

export default function Contacts(){

    const [message, setMessage] = useState('');
    
    const phoneNumber = '+254102621153'; 

    const handleMessageChange = (event) => {
       
        setMessage(event.target.value);
    };

    const sendToWhatsapp = () => {
        if (!message) {
            alert("Please enter a message before sending.");
            return;
        }

       
        const encodedMessage = encodeURIComponent(message);

       
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      
        window.open(whatsappURL, '_blank');
        
       
        setMessage('');
    }; 

    return(
        <div className=" gap-4 flex flex-col m-auto p-2   justify-center items-center md:flex md:flex-row md:justify-center border-1 my-5 border-gray-700 rounded-lg shadow-lg shadow-black/30 pb-5 ">

        <div className="flex flex-col justify-center w-full m-auto  text-left  h-[300px] text-gray-700 border-2 border-green-600  rounded-lg p-4 " >
            
            <p className="text-black font-bold ">Have a story to share? contact me: </p>
            <p>  nduryamuhammad@gmail.com</p>
            <p>Phone: +254714531306</p>
            <p> Nairobi, Kenya</p> <br/>

            <div className="bg-green-700 text-gray-200 shadow-lg shadow-gray-500 p-1 rounded-lg ">
                <p className="text-[13px ]">Have a project? lets  collaborate-<br/> web development gigs, blog<br/> writing or want to  advertise here - send a direct whatsapp message</p>
            </div>
        </div><br/>

        <div className="contact-sec-form flex flex-col justify-center items-center w-full ">
            <form className=" flex flex-col justify-center text-left  w-[330px] text-gray-700 border-2 border-green-600 rounded-lg p-4">
                <p>Send a whatsApp message:</p>
                <input type="text"  onChange={handleMessageChange} placeholder="enter your full name" required />

                <textarea type="text" id="whatsapp_msg" value={message} onChange={handleMessageChange} placeholder="enter your full name" required />

                <button className="bg-green-700 hover:bg-transparent hover:text-black rounded-full" onSubmit={sendToWhatsapp}>Submit</button>
            </form>
        </div>
        </div>
    )
    }