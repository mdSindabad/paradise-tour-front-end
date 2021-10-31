import React from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import usePurchased from '../../hooks/usePurchased';

const PurchaseModal = ({ show, handleClose, user, service }) => {
    // router hook
    const history = useHistory();

    // context hook
    const { purchased, setUpdate } = usePurchased();

    const isThereMember = purchased.filter(each => {
        return each.package == service.title
    });
    const isPurchased = isThereMember?.filter(each => {
        return each.email == user.email
    });

    const handlePurchase = () => {
        setUpdate(true)
        axios.post('http://localhost:5000/purchase', {
            name: user.displayName,
            email: user.email,
            package: service.title,
            price: service.price,
            duration: service.duration,
            status: "pending"
        })
            .then(response => {
                if (response.data.insertedId) {
                    history.push('/destinations');
                }
            })
            .catch(error => console.log(error))
    }

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
                {
                    !isPurchased.length == 0 && <small className="me-auto text-danger">Already Purchased.</small>
                }
                <Button variant="success" className={!isPurchased.length == 0 ? "disabled" : ""} onClick={handlePurchase}>
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
