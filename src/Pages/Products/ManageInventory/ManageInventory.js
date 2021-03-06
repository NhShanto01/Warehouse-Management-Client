import React from 'react';
import { Card } from 'react-bootstrap';
import { AiFillDelete } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import PageName from '../../Shared/PageName/PageName';


const ManageInventory = (props) => {

    const { _id, name, image, price, quantity, about, supplier } = props.send;
    const handleDeleteBtn = props.handleDeleteBtn;



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
                    <button
                        onClick={() => handleUpdate(_id)}
                        className='btn btn-info text-light me-3'>Update <MdUpdate /> </button>

                </Card.Body>
            </Card>
        </div>
    );

};

export default ManageInventory;