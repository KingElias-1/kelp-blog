import { useEffect, useState } from "react";//hooks

const useFetch = (url) => {

    const[data, setData] = useState(null); 
    const[isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() =>{
        const abortCont = new AbortController();//to abort fetch event when page is changed, avoiding react trying to update a state that is no longer needed
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch the data for that resource o_o")
                }
                return res.json();
            })
            .then(data =>{
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err =>{
                if(err.name === "AbortError"){
                    console.log('aborted')
                }else{
                setIsPending(false);
                setError(err.message);
                }
            });
        }, 600);

        return () => abortCont.abort();//abort controller doesn't actually work
    }, [url]);

    return { data, isPending, error};
}
 
export default useFetch;