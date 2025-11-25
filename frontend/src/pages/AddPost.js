import React from "react";
  
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPost() {

    const [image, setImage] =useState("")
     const [title, setTitle] =useState("")
     const [summary, setSummary] =useState("")
    const [content, setContent] =useState("")
    

    const navigate = useNavigate();

    const AddPostInfo = async ()=>{
        let formField = new FormData()

        formField.append('title', title)
        formField.append('summary', summary)
        formField.append('content', content)
    
        if(image !== null) {
             formField.append('image', image)
        }
        await axios.post("http://127.0.0.1:9000/blog/", formField, {
    headers: { "Content-Type": "multipart/form-data" }
})
        .then(response => {
            console.log(response.data);
            navigate("/posts");
        })
        .catch(error => console.error('Error:', error));
    }       

    return (
        <>
          

            <h1>Add Post</h1>
            <div className="AddPostContainer">

                <div className="Add-Post-form">
                    <input
                    type="text"
                    placeholder="Enter blog title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="Add-Post-form">
                    <input
                    type="text"
                    placeholder="Enter blog summary"
                    name="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}/>
                </div>
                <div className="Add-Post-form">
                    <textarea
                    placeholder="Enter blog content"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>

                    </textarea>
                    </div>
                <div className="Add-Post-form">
                    <input  
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}/> 
                    
                </div>

                <button className="AddPostInfoBtn" onClick={AddPostInfo}>Add Post</button>
            </div>
        </>
        
    );
}
