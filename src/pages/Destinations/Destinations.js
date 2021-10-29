import React from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Destination from '../../components/Destination/Destination';
import './destinations.css';


const Destinations = () => {
    // services context
    const { services, isLoading, error } = useServices();

    return (
        <Container>
            <h1 className="my-3 text-primary">Destinations</h1>
            {
                isLoading ? <div className="vh-100 d-flex justify-content-center mt-5">
                    <Spinner animation="border" variant="warning" />
                </div> :
                    error ? <div className="vh-100 d-flex justify-content-center align-items-center">
                        <Alert variant="danger">
                            {error}!
                        </Alert>
                    </div> :
                        <div className="services-container mb-3">
                            {
                                services?.map(service => {
                                    return (
                                        <Destination key={service.id} data={service} />
                                    )
                                })
                            }
                        </div>
            }
        </Container >
    )
}

export default Destinations;
