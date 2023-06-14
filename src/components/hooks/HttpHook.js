import { useState } from "react"


const useHttpHook = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const httpRequest = async (url, method = "GET", headers = {"Content-type": "application/json"} ,body = null) => {

        try{
            setError(false);
            setLoading(true);

            const response = await fetch(url, {
                method,
                headers,
                body
            })

            if(response.ok){
                setLoading(false);
                return await response.json();
            }
                
            else
                throw new Error("Oops! Could not fetch!");
        } catch(e){
            setLoading(false);
            setError(true);
            console.log(e)
        }

    }

    return {loading, error, httpRequest}

}

export default useHttpHook