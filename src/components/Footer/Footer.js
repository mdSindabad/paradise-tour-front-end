import React from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { ImLocation2, ImPhone, ImMail4 } from 'react-icons/im';
import './footer.css';

const Footer = () => {
    // auth context
    const { user } = useAuth();

    // router hook
    const history = useHistory();

    const handleClick = (path) => {
        history.push(path)
    };

    return (
        <div className="bg-dark text-white pt-3 mt-3 pb-1">
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <h3 className="cursor mb-0" onClick={() => handleClick('/')}>Paradise<span className="text-warning">Travel</span></h3>
                        <small className="text-secondary">Fulfil your dream, travel to your desired places.</small>
                        <div className="mt-2">
                            <p className="m-0"><ImMail4 className="me-1" />info@pradisetravel.com</p>
                            <p className="m-0"><ImPhone className="me-1" />+880 742 3960</p>
                            <p className="m-0"> <ImLocation2 className="me-1" />112/B, Banani, Dhaka</p>
                        </div>
                    </Col>
                    <Col className="mt-3" xs={12} md={3}>
                        <h4 className="logo text-warning mb-0">Talk to Us</h4>
                        <div className="mt-2">
                            <p onClick={() => handleClick('/about')} className="cursor text-primary mb-0">About Us</p>
                            <p onClick={() => handleClick('/contact')} className="cursor text-primary mb-0">Contact</p>
                            {
                                !user.email &&
                                <p onClick={() => handleClick('/login')} className="cursor text-primary mb-0">Login/ Register</p>
                            }
                            <p onClick={() => handleClick('/destinations')} className="cursor text-primary mb-0">Destinations</p>
                        </div>
                    </Col>
                    <Col className="mt-3" xs={12} md={6}>
                        <h4 className="text-warning mb-0">Newsletter</h4>
                        <div className="mt-2">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Enter email"
                                    aria-label="Enter email"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-primary" id="button-addon2">
                                    Subscribe
                                </Button>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
                <p className="mt-1 text-center">&copy; Copyright 2021, Paradise Travel</p>
            </Container>
        </div>
    )
}

export default Footer;
