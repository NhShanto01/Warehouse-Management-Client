import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateQuantity = () => {
    const { productId } = useParams();
    return (
        <div>
            <h2>this is UpdateQuantity:{productId}</h2>
            <Link to="products">Manage Inventory</Link>
        </div>
    );
};

export default UpdateQuantity;