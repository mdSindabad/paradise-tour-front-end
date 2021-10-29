import React from 'react';
import { useHistory } from 'react-router-dom';
import './destination.css';

const Destination = ({ data }) => {
    // router hook
    const history = useHistory();

    // destracturing props
    const { _id, title, images } = data;

    const goToDetails = (serviceId) => {
        history.push(`/destination/${serviceId}`);
    };
    return (
        <div className="service" onClick={() => goToDetails(_id)}>
            <div className="img-container">
                <img className="img-fluid" src={images[0]} alt={title} />
            </div>
            <div className="mt-1 px-2 text-secondary">
                <h5 className="text-capitalize">{title}</h5>
            </div>
        </div>
    )
}

export default Destination;
