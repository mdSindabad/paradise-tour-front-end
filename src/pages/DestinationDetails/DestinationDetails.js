import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import DetailsCarousel from '../../components/DetailsCarousel/DetailsCarousel';

const DestinationDetails = () => {
    // local state
    const [service, setService] = useState();
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');


    // router hook
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        setError('');
        setIsloading(true);

        axios.get(`http://localhost:5000/service/${params.destinationId}`)
            .then(res => {
                setService(res.data);
                setIsloading(false);
            })
            .catch(err => {
                console.log('error...')
                setError(err.message);
                setIsloading(false);
            })
    }, [])

    return (
        <>
            {
                isLoading ? <div className="vh-100 d-flex justify-content-center mt-5">
                    <Spinner className="mt-5" animation="border" variant="warning" />
                </div> :
                    error ? <div className="vh-100 d-flex justify-content-center align-items-center">
                        <Alert variant="danger">
                            {error}!
                        </Alert>
                    </div> :
                        <div className="mb-3">
                            <DetailsCarousel title={service.title} images={service.images} />
                            <Container className="mt-3">
                                <h2 className="text-primary">{service.title}</h2>
                                <div className="d-md-flex justify-content-between me-5">
                                    <div>
                                        <p className="my-0"><b>Location: </b>{service.location}</p>
                                        <p className="my-0"><b>Tour Duration: </b>{service.duration}</p>
                                        <p className="my-0"><b>Package Price: </b>${service.price}</p>
                                    </div>
                                    <div>
                                        <Button className="my-2" variant="primary">Purchase</Button>
                                    </div>
                                </div>
                                <p className="mt-2">{service.descriptions}</p>
                            </Container>
                        </div>
            }
        </>
    )
}

export default DestinationDetails;
