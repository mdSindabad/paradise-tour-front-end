import React, { useEffect } from 'react';
import { Alert, Container, Spinner, Button } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Destination from '../../components/Destination/Destination';
import './destinations.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Destinations = () => {
    //auth context
    const { user } = useAuth();

    // services context
    const { services, isLoading, error } = useServices();

    useEffect(() => {

    }, [services])
    return (
        <Container className="mt-4 pt-4">
            <h1 className="my-3 text-primary">Destinations</h1>
            {
                isLoading ? <div className=" d-flex justify-content-center mt-5 align-items-center">
                    <Spinner animation="border" variant="warning" />
                </div> :
                    error ? <div className="vh-100 d-flex justify-content-center align-items-center">
                        <Alert variant="danger">
                            {error}!
                        </Alert>
                    </div> :
                        <div className="mb-3">
                            {
                                user?.email && <Button as={Link} to="/add-destination" className="my-3">Add Destination</Button>
                            }
                            <div className="services-container">
                                {
                                    services?.map(service => {
                                        return (
                                            <Destination key={service.id} data={service} />
                                        )
                                    })
                                }
                            </div>
                        </div>
            }
        </Container >
    )
}

export default Destinations;
