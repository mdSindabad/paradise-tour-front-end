import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { FaHandHoldingHeart, FaThumbsUp, FaClock } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { GiSatelliteCommunication } from 'react-icons/gi';
import './about.css';

const About = () => {
    return (
        <>
            <div className="banner">
                <img style={{ height: "350px", width: "100%", objectFit: "cover" }} src="https://i.ibb.co/1mkg8n5/about.jpg" alt="about" />
                <div>
                    <h1 className="title">About Us</h1>
                </div>
            </div>
            <Container className="text-center my-3">
                <h2 className="fw-bold text-primary my-4">About Paradise Travel</h2>
                <p><b>We are top Tour Operators and Travel Agency. We are offering in total 578 tours and holidays through-out the world. We have received 1248 customer reviews.</b></p>
                <p>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.Travel has helped us to understand the meaning of life and it has helped us.</p>
                <Row className="h-3">
                    <Col xs={12} md={4}><h6><b><MdOutlineHealthAndSafety className="mb-1 text-primary me-1" />Safe Travel</b></h6></Col>
                    <Col xs={12} md={4}><h6><b><FaHandHoldingHeart className="mb-1 text-primary me-1" />Budget Friendly</b></h6></Col>
                    <Col xs={12} md={4}><h6><b><FaClock className="mb-1 text-primary me-1" />Expert Trip Planning</b></h6></Col>
                    <Col xs={12} md={4}><h6><b><GiSatelliteCommunication className="mb-1 text-primary me-1" />Fast Communication</b></h6></Col>
                    <Col xs={12} md={4}><h6><b><FaThumbsUp className="mb-1 text-primary me-1" />Proper Guidance</b></h6></Col>
                    <Col xs={12} md={4}><h6><b><BiSupport className="mb-1 text-primary me-1" />24/7 support</b></h6></Col>
                </Row>
            </Container>
        </>
    )
}

export default About;
