import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ products }) => {
    const navigate = useNavigate();
    const { _id, name, image, price, quantity, about, supplier } = products;

    const navigateToUpdateQuantity = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='container g-2 col-sm-12 col-md-6 col-lg-4'>
            <Card style={{ width: '20rem' }}>
                <Card.Img className='img-fluid' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price:{price}</p>
                    <p><b>Quantity:{quantity}</b> </p>
                    <Card.Text>
                        <u>Description</u> : {about}
                    </Card.Text>
                    <h5>Supplier: {supplier}</h5>
                    <Button
                        onClick={() => navigateToUpdateQuantity(_id)}
                        className='text-light fw-bold'
                        variant="info">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;