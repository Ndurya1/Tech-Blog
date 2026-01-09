import React, {useEffect, useState} from "react";
import { BlogService } from "../Services/BlogService";

export default function ReadBlog(){
    const[blog, setBlog] = useState([])
    const [loading, setLoading] = useState(true)
    const[error, setError] =useState(null)


    const fetchBlog = async()=>{
        try {
            setLoading(true)
            setBlog(await BlogService.getAll())
            
        } catch (error) {
            setError(error.response?.data ||  error.message)
            
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchBlog()
    }, [])

    return{blog, loading, error, refetch:fetch}
}