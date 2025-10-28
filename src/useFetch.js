import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url) // Use the 'url' argument
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch data from the resource");
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data); // Set 'data'
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 5000); 
    }, [url]); // Add 'url' to the dependency array

    // Return the three values
    return { data, isPending, error };
}

export default useFetch;