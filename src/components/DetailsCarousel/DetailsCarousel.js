import React from 'react';
import { Carousel } from 'react-bootstrap';
import './detailsCarousel.css';

const DetailsCarousel = ({ images, title }) => {
    return (
        <Carousel>
            {
                images.map((image, index) => {
                    return (
                        <Carousel.Item key={index} className="slider">
                            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={image} alt={title} />
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    )
}

export default DetailsCarousel;
