import React from 'react';
import { Carousel } from 'react-bootstrap';
import './homeCarousel.css';

const HomeCarousel = ({ services }) => {
    return (
        <Carousel>
            {
                services.map((service) => {
                    return (
                        <Carousel.Item key={service._id} className="slider">
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={service.images[0]} alt={service.title} />
                            <Carousel.Caption>
                                <h3 className="carousel-title text-warning">{service.location}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    )
}

export default HomeCarousel;
