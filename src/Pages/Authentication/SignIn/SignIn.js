import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignIn = () => {
    const emailUseRef = useRef('');
    const passUseRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    // implement email and password authentication.

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Implement Password reset email .

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    let errorTextElement;
    if (error) {
        errorTextElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading || sending) {
        // return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const handleForSignIn = event => {
        event.preventDefault();
        const email = emailUseRef.current.value;
        const password = passUseRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    // For moving SignUp page.

    const navigateToSignup = () => {
        navigate('/signup');
    }

    const resetPassword = async () => {
        const email = emailUseRef.current.value;
        if (email) {
            await
                sendPasswordResetEmail(email);
            alert('sent email');
        }
        else {
            alert('Please Fill up your email field')
        }
    }


    return (
        <section>
            <div className='container w-50'>
                <h2 className='mt-4'>Please SignIn</h2>
                <Form onSubmit={handleForSignIn} className='text-start mt-3'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailUseRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passUseRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <button className='btn btn-dark'>SignIn</button>
                </Form>
                {errorTextElement}
                <p className='text-start'>New to Sports Zone ? <Link to="/register" className='pe-auto text-decoration-none' onClick={navigateToSignup}>Please Register</Link> </p>


                <p className='text-start'>Forget Password? <button className='btn btn-link pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                {/* <SocialLogin></SocialLogin>
                <ToastContainer /> */}
            </div>
        </section>
    );
};

export default SignIn;