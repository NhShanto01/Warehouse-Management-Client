import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorTextElement;

    if (loading) {
        return
    }

    if (error) {
        errorTextElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    if (user) {
        // navigate('/home');
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='m-2 p-3 rounded-circle bg-dark text-light'>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorTextElement}
            <div className='social-btn'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='button btn btn-light sm:w-100 d-block mx-auto my-2 border-secondary'>
                    <span className='btn-title px-2'><FcGoogle /> Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;