import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PurchaseModal = ({ show, handleClose, user, service }) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-capitalize d-flex align-items-center">
                    {service.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5 className="text-center text-primary">Package Info.</h5>
                <p className="text-capitalize py-0 my-0"><b>Price:</b> ${service.price}</p>
                <p className="text-capitalize py-0 my-0"><b>Duration:</b> {service.duration}</p>
                <p className="text-capitalize py-0 my-0"><b>Location:</b> {service.location}</p>
                <hr />
                <h5 className="text-center text-primary">Customer Info.</h5>

                <p className="text-capitalize py-0 my-0"><b>Name:</b> {user.displayName}</p>
                <p className="py-0 my-0"><b>Email:</b> {user.email}</p>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="success">
                    Make Payment
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PurchaseModal;
