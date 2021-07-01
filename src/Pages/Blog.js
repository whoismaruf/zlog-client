import React from 'react'
import BlogList from '../components/Blogs/BlogList'
import useFetch from '../hooks/useFetch'


function Blog() {
    const auth_token = process.env.REACT_APP_AUTH_TOKEN
    const { data:blogs, error } = useFetch("/blog/", auth_token)

    return (
        <div className={"md:px-8 px-4 lg:px-56"}>
            {error && <h2 className={'text-red-600'}>{error}</h2>}
            {blogs && <BlogList blogs={blogs}/> }
        </div>
    )
}



export default Blog
