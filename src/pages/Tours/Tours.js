import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecentTour from '../../components/RecentTour/RecentTour';
import useServices from '../../hooks/useServices';
import './tours.css';

const Tours = () => {
    // context hooks
    const { services, isLoading, error } = useServices();

    return (
        <div className="mb-5 mt-4 pt-4">
            <div className="banner">
                <img style={{ height: "350px", width: "100%", objectFit: "cover" }} src="https://i.ibb.co/L977Dnw/tour.jpg" alt="tour" />
                <div>
                    <h1 className="title">Recent Tours</h1>
                </div>
            </div>
            <Container className="tour-container my-3">
                {
                    !isLoading && <RecentTour services={services} />
                }
            </Container>
        </div>
    )
}

export default Tours;
