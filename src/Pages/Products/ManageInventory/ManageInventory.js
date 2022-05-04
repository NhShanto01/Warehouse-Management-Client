import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import PageName from '../../Shared/PageName/PageName';


const ManageInventory = (props) => {
    const [products, setProducts] = useProducts();
    const { _id, name, image, price, quantity, about, supplier } = props.send;


    const handleDeleteBtn = id => {
        console.log('object', id);
        const proceed = window.confirm('Are You Sure For This?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItems = [...products, data];
                    setProducts(remainingItems);
                })
        }
    }

    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='container g-2 col-sm-12 col-md-6 col-lg-4'>
            <PageName title="Products"></PageName>
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
                    <button
                        onClick={() => handleDeleteBtn(_id)}
                        className='btn btn-danger me-3'>Delete <AiFillDelete /> </button>

                </Card.Body>
            </Card>
        </div>
    );
};

export default ManageInventory;