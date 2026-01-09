import React, {useState} from "react";
import { BlogService } from "../Services/BlogService";

export default function ReadBlogActions(){
    const [loading, setLoading]= useState(false)
    const [error, setError] = useState(null)

    const CreateBlog =async(data)=>{
        setLoading(true)
        try {
              return await BlogService.create(data)
            
        } catch (error) {
            setError(error.response?.data || error.message)
            throw error
            
        } finally{
            setLoading(false)
        }
    }
    const UpdateBlog =async(id, data)=>{
        setLoading(true)
        try {
              return await BlogService.update(id, data)
            
        } catch (error) {
            setError(error.response?.data || error.message)
            throw error
            
        } finally{
            setLoading(false)
        }
    }
    const deleteBlog =async(id)=>{
        setLoading(true)
        try {
              return await BlogService.delete(id)
            
        } catch (error) {
            setError(error.response?.data || error.message)
            throw error
            
        } finally{
            setLoading(false)
        }
    }

    return{CreateBlog, UpdateBlog, deleteBlog, loading, error}
}