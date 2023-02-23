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
        <>
        {apiData.map((getApiSingleData) => {
            return (
                <div key={getApiSingleData._id}>
                <p>Name: {getApiSingleData.name}</p>
                <p>Gattung : {getApiSingleData.gattung}</p>
                <p>Wasser: {getApiSingleData.wasser}</p>
                <img src={getApiSingleData.pictureurl} alt={getApiSingleData.name} />
                </div>
            )
        })
    }
        </>
    )
}

export default Get