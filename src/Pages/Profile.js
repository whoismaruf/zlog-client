import React from 'react'
import useFetch from '../hooks/useFetch'
import UserProfile from '../components/Auth/UserProfile'


export default function Profile() {
    const auth_token = "Token d9a50da3558d4a1214312ceec97fb189a1f78b5a"
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
