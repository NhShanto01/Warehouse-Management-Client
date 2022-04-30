import React from 'react';
import notFoundImg from '../../../image/internet-network-warning-404-error-page.jpg';

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;