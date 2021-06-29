import React, { useState } from 'react'

function PostBlog() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const auth_token = "Token d9a50da3558d4a1214312ceec97fb189a1f78b5a"
    const [check, setCheck] = useState(false)

    const handleSubmit = function (e) {
        e.preventDefault()
        const blog = {title, body}
        fetch('http://127.0.0.1:8000/blog/', {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                'Authorization': auth_token,
            },
            body: JSON.stringify(blog)
        })
        .then((res) => {
            console.log(res)
            setCheck(true)
            setTitle('')
            setBody('')
        })
    }

    return (
        <div className={"-mt-24"}>
            <div className={"container px-5 py-24 mx-auto flex"}>
                <div className={"lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 "}>
                    {/* <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Create Post</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Post your thoughts to Zlog community</p> */}
                    <form onSubmit={handleSubmit} action="">
                        <div className="relative mb-4">
                            <label htmlFor="title" className="leading-7 text-sm text-gray-600">Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="title" id="title" name="title" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="body" className="leading-7 text-sm text-gray-600">Body</label>
                            <textarea value={body} onChange={(e) => setBody(e.target.value)} id="body" name="body" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Post</button>
                    </form>
                    {check && <p className={"p-4 text-green-600"}>Your blog has been posted.</p>}
                </div>
            </div>
        </div>
    )
}

export default PostBlog
