import React from 'react';
import BlogList from '../Blogs/BlogList';

export default function UserProfile({user, blogs}) {
    return (
        <div className={"mt-8 mb-8 flex justify-center md:px-8 px-4 lg:px-56"}>
            <div className="shadow-lg rounded-2xl w-full  bg-white dark:bg-gray-800">
                <img alt="profile" src="https://i.ibb.co/N9hHZW4/cover.jpg" className="rounded-t-lg h-64 lg:h-80 w-full mb-4 cover-fill"/>
                <div className="flex flex-col items-center justify-center p-4 -mt-16">
                    <a href="/" className="block relative">
                        <img alt="profile" src="https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png" className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white dark:border-gray-800"/>
                    </a>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mt-2">
                        {user.username}
                    </p>
                    <p className="text-gray-400 text-xs mb-4">
                        {user.email}
                    </p>
                    <p className="text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
                        Professional
                    </p>
                    {/* <div className="rounded-lg p-2 w-full mt-4">
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                            <p className="flex flex-col">
                                Articles
                                <span className="text-black dark:text-white font-bold">
                                    34
                                </span>
                            </p>
                            <p className="flex flex-col">
                                Followers
                                <span className="text-black dark:text-white font-bold">
                                    455
                                </span>
                            </p>
                            <p className="flex flex-col">
                                Rating
                                <span className="text-black dark:text-white font-bold">
                                    9.3
                                </span>
                            </p>
                        </div>
                    </div> */}
                     {/* User Blogs */}
                    <div className={"block"}>
                        <BlogList blogs={blogs}></BlogList>
                    </div>
                </div>
            </div>
            
           

        </div>
    )
}
