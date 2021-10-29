import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
    // local state
    const initialData = {
        name: '',
        email: '',
        message: ''
    }
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(initialData);

    const handleChange = (e) => {
        setError(initialData);
        setData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    };

    const handleMessage = (e) => {
        e.preventDefault();
        setError(initialData);
        if (!data.name) {
            setError(prevError => ({
                ...prevError,
                name: 'Please provide your name'
            }))
        } else if (!data.email) {
            setError(prevError => ({
                ...prevError,
                email: 'Please insert an email address'
            }))
        } else if (!data.message) {
            setError(prevError => ({
                ...prevError,
                message: 'Please write a message'
            }))
        } else {
            alert(`Hello ${data.name}, your message has been sent successfully.`)
        }
    };

    return (
        <Container className="my-5 pt-2">
            <h1 className="text-center my-3 text-primary">Contact Us</h1>
            <Row className="d-flex justify-content-center">
                <Col xs={11} md={6}>
                    <Form className="form" onSubmit={handleMessage}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={data.name} onChange={handleChange} name='name' type="text" placeholder="Your name" />
                            {error.name && <p className="text-danger">{error.name}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={data.email} onChange={handleChange} name='email' type="email" placeholder="name@example.com" />
                            {error.email && <p className="text-danger">{error.email}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control value={data.message} onChange={handleChange} name='message' as="textarea" rows={3} placeholder="Your message" />
                            {error.message && <p className="text-danger">{error.message}</p>}
                        </Form.Group>
                        <Button className="form-control" type="submit">Send</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;
