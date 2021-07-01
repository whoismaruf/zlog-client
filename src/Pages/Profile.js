import React from 'react'
import useFetch from '../hooks/useFetch'
import UserProfile from '../components/Auth/UserProfile'


export default function Profile() {
    const auth_token = process.env.REACT_APP_AUTH_TOKEN
    const { data:user, error } = useFetch("/auth/user/", auth_token)
    const { data:blogs } = useFetch('/blog/my/', auth_token)
    console.log(blogs)
    return (
        <div>
            {error && <h2 className={'text-red-600'}>{error}</h2>}
            {user && <UserProfile user={user} blogs={blogs}>    
            </UserProfile>}
            
        </div>
    )
}
