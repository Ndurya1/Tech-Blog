import api from '.BlogApi'

export const BlogService ={
    getAll:()=>
    api.get("/blog").then(res=>res.data),

    getById:(id)=>
        api.get(`/blog/${id}/`).then(res=> res.data),

    create:(data)=>
        api.post(`/blog/`, data).then(res=> res.data),

    update: (id, data) =>
        api.put(`/blog/${id}/`, data).then (res=> res.data),

    delete:(id)=>
        api.delete(`/blog${id}/`)


}