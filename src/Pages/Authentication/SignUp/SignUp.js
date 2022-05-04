import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import PageName from '../../Shared/PageName/PageName';
import SocialLogin from '../SocialLogin/SocialLogin';

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

    // using jwt token by useToken hook

    const [token] = useToken(user);

    const navigateToSignIn = () => {
        navigate('/signin');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/home');
    }

    const handleForSignUp = event => {
        event.preventDefault();
        const name = nameUseRef.current.value;
        const email = emailUseRef.current.value;
        const password = passUseRef.current.value;

        createUserWithEmailAndPassword(email, password);

        updateProfile({ displayName: name });

        toast.success('update your Profile')
    }



    return (
        <section>
            <div className='container mt-3 w-50 border border-2 border-info rounded shadow-lg p-3 mb-5 bg-body'>
                <PageName title="Sign Up"></PageName>
                <h2 className='mt-4'>Please SignUp</h2>
                <Form onSubmit={handleForSignUp} className='text-start mt-4'>

                    <Form.Group className="mx-auto mb-3 w-75" controlId="formBasicEmail">
                        <Form.Control ref={nameUseRef} type="text" placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="mx-auto mb-3 w-75" controlId="formBasicEmail">
                        <Form.Control ref={emailUseRef} type="email" placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mx-auto mb-3 w-75" controlId="formBasicPassword">
                        <Form.Control ref={passUseRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <button className='btn btn-dark w-50 mx-auto d-block'>SignUp</button>
                </Form>
                {/* {errorTextElement} */}
                <p className='mt-3'>Already have an account? <Link to="/signin" className='text-info pe-auto text-decoration-none' onClick={navigateToSignIn}>Please Sign In</Link> </p>
                <SocialLogin></SocialLogin>

            </div>
        </section>
    );
};

export default SignUp;