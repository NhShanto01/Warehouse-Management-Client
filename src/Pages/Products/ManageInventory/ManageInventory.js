import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";

const ManageInventory = ({ products }) => {
    const { name, image, price, quantity, about, supplier } = products;
    return (
        <div className='container g-2 col-sm-12 col-md-6 col-lg-4'>
            <Card style={{ width: '22rem' }}>
                <Card.Img className='img-fluid' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price:{price}</p>
                    <p><b>Quantity:{quantity}</b> </p>
                    <Card.Text>
                        <u>Description</u> : {about}
                    </Card.Text>
                    <h5>Supplier: {supplier}</h5>
                    <button className='btn btn-danger'>Delete <AiFillDelete /> </button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageInventory;