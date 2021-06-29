import React from 'react'

const BlogList = ({blogs}) => {

    return (
        <div className="mb-4">
            {/* <h1 className="text-5xl text-white text-center">Hello  👋</h1> */}
            {/* <button onClick={handleClick} className="p-4 bg-green-600 rounded-lg font-bold text-white mt-5 hover:bg-gray-600">
                Get Blogs 🚀
            </button> */}
            {blogs && blogs.map((blog) => (
                <div className={"text-center mt-8 border-2 border-blue-300 p-4"} key={blog.id}>
                    <h2 className={"text-center text-xl font-bold text-gray-700"}>{blog.title}</h2>
                    <p className={"text-gray-800"}>{blog.body}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList;