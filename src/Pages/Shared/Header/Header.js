import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

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
                        <Nav className="m-auto nav-text">
                            <NavLink className='' to="home">Home</NavLink>
                            <NavLink to="blog">Blogs</NavLink>
                            <NavLink to="about">About</NavLink>
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <NavLink to="additem">Add Item</NavLink>
                                    <NavLink to="products">Products</NavLink>
                                    <NavLink to="myitem">My Item</NavLink>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none border border-info text-info rounded-pill' onClick={handleSignOut}>sign out</button>
                                    :
                                    <NavLink
                                        className='border border-info text-info rounded-pill'
                                        as={Link} to="signin">
                                        SignIn
                                    </NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};



export default Header;