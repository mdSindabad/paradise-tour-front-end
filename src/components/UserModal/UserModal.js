import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const UserModal = ({ show, handleClose, user, logOut }) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-capitalize d-flex align-items-center">
                    {
                        user?.photoURL ?
                            <img style={{ width: "45px", height: "45px", cursor: "pointer" }} className="rounded-circle me-2" src={user.photoURL} alt={user.displayName.split(" ")[0]} /> :
                            user.email && <FaUserCircle style={{ width: "30px", height: "30px", cursor: "pointer" }} className="rounded-circle text-primary me-2" />
                    }
                    {
                        user?.displayName
                        || user?.email.split("@")[0]
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-capitalize"><b>Name:</b> {user.displayName}</p>
                <p><b>Email:</b> {user.email}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={logOut}>
                    Logout
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserModal;
