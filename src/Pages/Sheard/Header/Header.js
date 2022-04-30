import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    {user ? <p className='mt-3 text-light me-4'>User : {user?.displayName}</p> : ""}

                    {
                        user ?
                            <button className='btn btn-link text-light fw-bold text-decoration-none' onClick={handleSignOut}>Logout</button>
                            :
                            <Nav.Link className='text-light fw-bold' as={Link} to="login">
                                Login
                            </Nav.Link>
                    }
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;