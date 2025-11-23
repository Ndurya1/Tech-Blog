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
        <div className="contact-section">
        <div className="contact-sec-text">
            <h2>Reach Out</h2>
            <p> Email: nduryamuhammad@gmail.com</p>
            <p>Phone: +254714531306</p>
            <p> Nairobi, Kenya</p>
        </div>
        <div className="contact-sec-form">
            <form>
                <p>Send a whatsApp message:</p>
                <input type="text"  onChange={handleMessageChange} placeholder="enter your full name" required />

                <textarea type="text" id="whatsapp_msg" value={message} onChange={handleMessageChange} placeholder="enter your full name" required />

                <button onSubmit={sendToWhatsapp}>Submit</button>
            </form>
        </div>
        </div>
    )
    }