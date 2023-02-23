import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header/Header'

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
        <Header />
            {apiData.map((getApiSingleData) => {
                return (
                    <Container key={getApiSingleData._id} className="border">
                        <Row>
                            <Col>Name: {getApiSingleData.name}</Col>
                            <Col>Gattung : {getApiSingleData.gattung}</Col>
                            <Col>Wasser: {getApiSingleData.wasser}</Col>
                            <Col><img src={getApiSingleData.pictureurl} className="img-fluid" alt={getApiSingleData.name} /></Col>
                        </Row>
                    </Container>
                )
            })
            }
        </>
    )
}

export default Get