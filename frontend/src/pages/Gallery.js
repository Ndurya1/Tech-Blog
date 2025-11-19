import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import {useState, useEffect} from "react";


export default function Gallery() {

    const[images, setImages] = useState([]);

    useEffect(() => {  
        const fetchImages = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/gallery/');
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Gallery Page</title>
                <meta name="description" content="A collection of beautiful images." />
                <meta name="keywords" content="gallery, images, travel, technology" />
                <meta name="author" content="Ndurya Muhammad" />
            </Helmet>
            <div>
                
                <h1>Gallery Page</h1>
                {images.map((image) => (
                    <div key={image.id}>
                        <h2>{image.title}</h2>
                        <img src={image.image} alt={image.title} />
                    </div>
                ))}
            </div>
        </HelmetProvider>
    );
}

   