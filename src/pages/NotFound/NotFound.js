import React from 'react';
import { useHistory } from 'react-router';
import { Button, Container } from 'react-bootstrap';
import { IoMdArrowRoundBack } from 'react-icons/io';

const NotFound = () => {
    // router hook
    const history = useHistory();

    const goHome = () => {
        history.push('/')
    };

    return (
        <Container className="text-center my-5 py-5">
            <div>
                <h1 className="text-danger display-1 fw-bold">404</h1>
                <p> Oops, sorry we can't find that page! </p>
                <Button onClick={goHome} className="d-flex align-items-center mx-auto"> <IoMdArrowRoundBack />Back to home</Button>
            </div>
        </Container>
    )
}

export default NotFound;
