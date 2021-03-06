import { useEffect, useState } from 'react'


export default function useFetch(endpoint, auth_token) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const url = "http://127.0.0.1:8000" + endpoint
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {
        signal: abortCont.signal,
        method: 'GET',
        headers: {
            'Authorization': auth_token,
        },
        })  
        .then(function(res) {
            if (!res.ok) {
                throw Error('Couldn\'t get the data from server!');
            }
            return res.json();
        })
        .then(function(data) {
            setData(data);
            setError(null)
        })
        .catch((err) => {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted!')
            } else {
                setError(err.message)
            }
        })
        return () => abortCont.abort()
    }, [url, auth_token]);

    return { data, error };
}
