import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItemDetail from '../../../hooks/useItemDetail';

const ManageQuantity = () => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useItemDetail(id);
    // console.log(itemDetail, 'item');
    const [user, setUser] = useState([]);
    const [isReload, setIsReload] = useState(false);
    // console.log('user', itemDetail.quantity);


    const handleUpdateQuantity = e => {
        e.preventDefault();

        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(itemDetail?.quantity);
        const updateQuantity = { newQuantity };

        if (!quantity) {
            alert('Please Add Some Quantity')
        }
        else {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateQuantity)
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsReload(!isReload);
                    e.target.reset();
                    toast.success('quantity added')
                });
        }
    };
    const handleDeliveredQuantity = (id) => {


        const quantity = itemDetail?.quantity;
        const updateQuantity = { quantity };

        const url = `http://localhost:5000/delivered/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsReload(!isReload);
                toast.success('quantity delivered')
            });
    };
    return (
        <div>
            <div>
                <img src={itemDetail.image} alt="" />
                <h2>{itemDetail.name}</h2>
                <p>Price : {itemDetail.price}</p>
                <p><b>Quantity : {itemDetail.quantity}</b></p>
                <p><small>Description : {itemDetail.about}</small></p>
                <h4>Supplier : {itemDetail.supplier}</h4>
                <button
                    onClick={() => handleDeliveredQuantity(itemDetail._id)}
                    className='btn btn-danger'
                > Delivered </button>
            </div>
            <form onSubmit={handleUpdateQuantity}>
                <input type="text" name='quantity' placeholder='Quantity' />

                <input type="submit" value="Quantity"
                    placeholder='Add Quantity' />

            </form>

            <Link
                className='my-5 border border-info'
                to="/products">Manage Inventory</Link>
        </div>
    );
};

export default ManageQuantity;