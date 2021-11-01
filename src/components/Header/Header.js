import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';
import UserModal from '../UserModal/UserModal';

const Header = () => {
    // auth context
    const { user, logOut } = useAuth();

    // local state
    const [show, setShow] = useState(false);

    // modal handler
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Paradise<span className="text-warning">Travel</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        {
                            user?.email && <Nav.Link className="text-capitalize text-success" onClick={handleShow} >welcome {user.displayName.split(' ')[0]
                                || user?.email?.split("@")[0]}</Nav.Link>
                        }
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/destinations'>Destinations</Nav.Link>
                        <Nav.Link as={Link} to='/upcoming-tours'>Tours</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        {
                            user?.photoURL ?
                                <img onClick={handleShow} style={{ width: "30px", height: "30px", cursor: "pointer" }} className="rounded-circle" src={user.photoURL} alt={user.displayName} title="Open Modal" /> :
                                user.email && <FaUserCircle onClick={handleShow} style={{ width: "30px", height: "30px", cursor: "pointer" }} className="rounded-circle text-primary" title="Open Modal" />
                        }
                        {
                            !user?.email && <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {/* modal */}
                        {
                            user.email &&
                            <UserModal show={show} handleClose={handleClose} logOut={logOut} user={user} />
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default Header;
