import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../../image/warning-404.png';

const NotFound = () => {
    return (
        <div>
            <div> <img className='img-fluid' src={notFoundImg} alt="" /></div>
            <div className='text-secondary pb-4'>
                <h3>Page Not Found</h3>
                <p>The page you are looking for no longer exists. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.</p>
                <Link to="/home" className='btn btn-info'> Back To Home</Link>
            </div>
        </div>

    );
};

export default NotFound;