import { useEffect, useState } from 'react'

const Get = () => {

    // GET REQUEST USE STATE
    const [apiData, setApiData] = useState([]);

    // FETCH DATA WITH HTTP GET
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/fische");
            const data = await response.json();
            setApiData(data);
        }
        fetchData();
    }, []);

    return (
        <div>Get
            <button onClick={console.log(apiData)}>showApiData</button>
        </div>
    )
}

export default Get