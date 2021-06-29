import React from 'react'
import BlogList from '../components/Blogs/BlogList'
import useFetch from '../hooks/useFetch'


function Blog() {
    const auth_token = "Token d9a50da3558d4a1214312ceec97fb189a1f78b5a"
    const { data:blogs, error } = useFetch("/blog/", auth_token)
    console.log(blogs)
    return (
        <div className={"md:px-8 px-4 lg:px-56"}>
            {error && <h2 className={'text-red-600'}>{error}</h2>}
            {blogs && <BlogList blogs={blogs}/> }
        </div>
    )
}



export default Blog
