import axios from 'axios';
import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import useServices from '../../hooks/useServices';

const AddDestination = () => {
    // services context
    const { setUpdate } = useServices();

    // router api
    const history = useHistory();

    // local state
    const initialUserInput = {
        title: "",
        descriptions: "",
        price: "",
        duration: "",
        location: "",
        image1: "",
        image2: "",
        image3: ""
    };

    const [userInput, setUserInput] = useState(initialUserInput);

    // user login/ registeration input handler
    const handleChange = (e) => {
        setUserInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, descriptions, price, duration, location, image1, image2, image3 } = userInput;

        if (!title || !price || !descriptions || !duration || !location || !image1 || !image2 || !image3) {
            alert("Please fill up all the fields")
        } else {
            const data = {
                title,
                images: [image1, image2, image3],
                descriptions,
                price,
                duration,
                location
            }
            axios.post("https://lit-castle-83888.herokuapp.com/add-destination", data)
                .then(res => {
                    if (res.data.insertedId) {
                        setUpdate(true);
                        history.push('/destinations')
                    }
                })
                .catch(err => console.log(err))
        }

    }
    return (
        <div className="my-5 pt-5">
            <h1 className="my-3 text-primary text-center">Add Destination</h1>
            <Row className="d-flex justify-content-center">
                <Col xs={10} md={6} className="form">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Enter name of the place. i.e. (India: The incredible country)" name="title" value={userInput.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descriptions</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Description of the place" name="descriptions" value={userInput.descriptions} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Location</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Location place. i.e. (Paris, France)" name="location" value={userInput.location} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Duration of tour. i.e. (5 days)" name="duration" value={userInput.duration} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Price of the package. i.e. (1200) [not money symbol]" name="price" value={userInput.price} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image-1</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Image-1 link" name="image1" value={userInput.image1} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image-2</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Image-2 link" name="image2" value={userInput.image2} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Image-3</Form.Label>
                            <Form.Control onChange={handleChange} type="text" placeholder="Image-3 link" name="image3" value={userInput.image3} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="form-control">
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default AddDestination
