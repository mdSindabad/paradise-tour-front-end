import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './login.css';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    // router hook
    const location = useLocation();
    const history = useHistory();
    const path = location.state?.from || '/';

    // auth context
    const { user, signInWithGoogle, registerWithEmail, loginWithEmail } = useAuth();

    // local state
    const initialUserInput = {
        name: "",
        email: "",
        password: ""
    };
    const [userInput, setUserInput] = useState(initialUserInput);
    const [newUser, setNewUser] = useState(false);
    const [error, setError] = useState('');

    // register or login with email
    const handleFormSubmit = (e) => {
        setError('');
        e.preventDefault();
        const { name, email, password } = userInput;
        if (!email || !password) {
            return
        } else {
            if (newUser) {
                registerWithEmail(name, email, password)
            } else {
                loginWithEmail(email, password)
                    .then(result => {
                        history.push(path)
                    })
                    .catch(err => setError(err.message))
            }
        }
    };

    // signin with google
    const handleGoogleSignin = () => {
        setError('');
        signInWithGoogle()
            .then(result => {
                history.push(path)
            })
            .catch(err => setError(err.message))
    }

    // checkbox handler
    const handleCheckBox = () => {
        setNewUser(prevState => !prevState);
    };

    // user login/ registeration input handler
    const handleChange = (e) => {
        setUserInput(prevInput => ({ ...prevInput, [e.target.name]: e.target.value }))
    };

    useEffect(() => {
        if (user.email) {
            history.push(path);
        }
    }, [user])

    return (
        <Container className="mb-5 mt-4 pt-4">
            <h1 className="text-center text-primary my-3">{newUser ? "Register" : "Login"}</h1>
            <Row className="d-flex justify-content-center">
                <Col xs={10} md={6} className="form">
                    <Form onSubmit={handleFormSubmit}>
                        {
                            newUser &&
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={handleChange} type="text" placeholder="Enter name" name="name" value={userInput.name} />
                            </Form.Group>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleChange} type="email" placeholder="Enter email" name="email" value={userInput.email} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} type="password" placeholder="Password" name="password" value={userInput.password} />
                        </Form.Group>
                        {
                            error && <p className="text-danger">{error}</p>
                        }
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={handleCheckBox} type="checkbox" label="New User" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="form-control">
                            {newUser ? "Register" : "Login"}
                        </Button>
                        <Button variant="secondary mt-2" className="form-control d-flex align-items-center justify-content-center" onClick={handleGoogleSignin}>
                            <FaGoogle className="me-1" /> Google
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;