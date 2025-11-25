import React from "react";
 
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateGallery() {

    const [image, setImage] =useState("")
     const [title, setTitle] =useState("")
    

    const navigate = useNavigate();

    const AddGalleryInfo = async ()=>{
        let formField = new FormData()

        formField.append('title', title)
    
        if(image !== null) {
             formField.append('image', image)
        }
        await axios.post("http://127.0.0.1:9000/gallery/", formField, {
    headers: { "Content-Type": "multipart/form-data" }
})
        .then(response => {
            console.log(response.data);
            navigate("/gallery");
        })
        .catch(error => console.error('Error:', error));
    }       

    return (
        <>
           

            <h1>Update Gallery</h1>
            <div className="UpdateGalleryContainer">

                

                
                <div className="Add-Post-form">
                    <input
                    type="text"
                    placeholder="Enter image title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className="Add-Post-form">
                    <input  
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}/> 
                    
                </div>

                <button className="AddPostInfoBtn" onClick={AddGalleryInfo}>Add Post</button>
            </div>
        </>
        
    );
}

