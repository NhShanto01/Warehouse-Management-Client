import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
    const nameUseRef = useRef('');
    const emailUseRef = useRef('');
    const passUseRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateToSignIn = () => {
        navigate('/signin');
    }

    const handleForSignUp = event => {
        event.preventDefault();
        const name = nameUseRef.current.value;
        const email = emailUseRef.current.value;
        const password = passUseRef.current.value;

        createUserWithEmailAndPassword(email, password);

        updateProfile({ displayName: name });

        alert('update your Profile')
    }



    return (
        <section>
            <div className='container w-50'>
                <h2 className='mt-4'>Please SignUp</h2>
                <Form onSubmit={handleForSignUp} className='text-start mt-4'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={nameUseRef} type="text" placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailUseRef} type="email" placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passUseRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <button className='btn btn-dark'>SignUp</button>
                </Form>
                {/* {errorTextElement} */}
                <p>Already have an account? <Link to="/signin" className='pe-auto text-decoration-none' onClick={navigateToSignIn}>Please Login</Link> </p>
                {/* <SocialLogin></SocialLogin>
                <ToastContainer /> */}
            </div>
        </section>
    );
};

export default SignUp;