import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AddItems = () => {
    const [items, setItems] = useState([]);
    const handleAddItem = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const supplier = event.target.supplier.value;
        const user = { name, description, price, quantity, image, supplier };

        // POST

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                const newItems = [...items, data];
                setItems(newItems);
                console.log(data);
            })
    }


    return (
        <div className='container'>
            <h2>Please Add an Item </h2>
            <form onSubmit={handleAddItem} className='border border-dark p-4 mt-4 mb-4 row w-50 mx-auto'>
                <input
                    className='mb-3'
                    type="text" name="name" placeholder='Product Name' autoComplete='off' required />

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" name='description' placeholder='Description' rows={3} />
                </Form.Group>

                <input
                    className='mb-3'
                    type="number" name="price" placeholder='Price' required />

                <input
                    className='mb-3'
                    type="number" name="quantity" placeholder='Quantity' autoComplete='off' required />

                <input
                    className='mb-3'
                    type="text" name="image" placeholder='Image' required />

                <input
                    className='mb-3'
                    type="text" name="supplier" placeholder='Supplier' required />

                <input
                    className='w-50 mx-auto btn btn-info text-light rounded-pill'
                    type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddItems;