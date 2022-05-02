import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateQuantity = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>this is UpdateQuantity:{productId}</h2>
        </div>
    );
};

export default UpdateQuantity;