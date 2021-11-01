import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const TourModal = ({ data, show, handleClose }) => {
    // console.log(data)
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-capitalize d-flex align-items-center">
                    <p>title</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>body</p>
            </Modal.Body>
            <Modal.Footer>
                <p>Footer</p>
            </Modal.Footer>
        </Modal>
    )
}

export default TourModal;
