import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import PageName from '../../Shared/PageName/PageName';
import SocialLogin from '../SocialLogin/SocialLogin';

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

    // using jwt token by useToken hook

    const [token] = useToken(user);

    // Implement Password reset email .

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    let errorTextElement;
    if (error) {
        errorTextElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
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

    const resetPassword = () => {
        const email = emailUseRef.current.value;
        if (email) {

            sendPasswordResetEmail(email);
            toast.success('sent email');
        }
        else {
            toast.warn('Please Fill up Your Email ')
        }
    }


    return (
        <section>
            <div className='container mt-3 w-50 border border-2 border-info rounded shadow-lg p-3 mb-5 bg-body'>
                <PageName title="Sign In"></PageName>
                <h2 className='mt-4'>Please SignIn</h2>
                <Form onSubmit={handleForSignIn} className='text-start mt-3'>

                    <Form.Group className=" mx-auto mb-3 w-75" controlId="formBasicEmail">
                        <Form.Control ref={emailUseRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mx-auto mb-3 w-75" controlId="formBasicPassword">
                        <Form.Control ref={passUseRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <button className='btn btn-dark w-50 mx-auto d-block'>SignIn</button>
                </Form>
                {errorTextElement}
                <p className=' mt-5'>New to Sports Zone ? <Link to="/signup" className='text-info pe-auto text-decoration-none' onClick={navigateToSignup}>Please Sign Up</Link> </p>


                <p>Forget Password? <button className='btn btn-link text-info pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                <SocialLogin></SocialLogin>

            </div>
        </section>
    );
};

export default SignIn;