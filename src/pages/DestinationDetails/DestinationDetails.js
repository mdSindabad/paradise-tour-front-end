import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Button, Container, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import DetailsCarousel from '../../components/DetailsCarousel/DetailsCarousel';
import useAuth from '../../hooks/useAuth';
import PurchaseModal from '../../components/PurchaseModal/PurchaseModal';
import usePurchased from '../../hooks/usePurchased';

const DestinationDetails = () => {
    // context hook
    const { user } = useAuth();
    const { purchased } = usePurchased();

    // local state
    const [service, setService] = useState();
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [member, setMember] = useState(0);

    // router hook
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        setError('');
        setIsloading(true);

        axios.get(`https://lit-castle-83888.herokuapp.com/service/${params.destinationId}`)
            .then(res => {
                setService(res.data);
                setIsloading(false);

                // check tour members
                const isPurchased = purchased.filter(each => {
                    return each.package == res.data.title
                });
                setMember(isPurchased?.length)
            })
            .catch(err => {
                console.log('error...')
                setError(err.message);
                setIsloading(false);
            })
    }, []);

    // modal handler
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                        <p className="my-0"><b>Tour Member: </b>{member}</p>
                                    </div>
                                    <div>
                                        <Button onClick={handleShow} className="my-2" variant="primary">Purchase</Button>
                                    </div>
                                </div>
                                <p className="mt-2">{service.descriptions}</p>
                            </Container>
                            {
                                user.email &&
                                <PurchaseModal show={show} handleClose={handleClose} user={user} service={service} />
                            }
                        </div>
            }
        </>
    )
}

export default DestinationDetails;
