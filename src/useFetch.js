import { useEffect, useState } from "react";//hooks

const useFetch = (url) => {

    const[data, setData] = useState(null); 
    const[isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() =>{
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch the data for that resource -_-")
                }
                return res.json();
            })
            .then(data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                setError(err.message);
            });
        }, 700);
    }, [url]);

    return { data, isPending, error};
}
 
export default useFetch;