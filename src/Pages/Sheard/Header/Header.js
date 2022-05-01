import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
// import logo from '../../../images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='text-info fs-2 fw-bold'>Sports Zone</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="products">Products</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="manageitem">Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none border border-info text-info rounded-pill' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link
                                        className='border border-info text-info rounded-pill'
                                        as={Link} to="signin">
                                        SignIn
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};



export default Header;