import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItemDetail from '../../../hooks/useItemDetail';
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { MdAdd } from "react-icons/md";
import { MdDoubleArrow } from "react-icons/md";


const ManageQuantity = () => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useItemDetail(id);
    const [isReload, setIsReload] = useState(false);


    const handleUpdateQuantity = e => {
        e.preventDefault();

        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(itemDetail?.quantity);
        const updateQuantity = { newQuantity };

        if (!quantity) {
            alert('Please Add Some Quantity')
        }
        else {
            const url = `https://young-retreat-52384.herokuapp.com/product/${id}`
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

        const url = `https://young-retreat-52384.herokuapp.com/delivered/${id}`
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
            <div className='container mt-3 w-50 border border-2 border-info rounded shadow-lg p-3 mb-5 bg-body'>
                <img className='img-fluid' src={itemDetail.image} alt="" />
                <h2>{itemDetail.name}</h2>
                <p>Price : {itemDetail.price}</p>
                <p><b>Quantity : {itemDetail.quantity}</b></p>
                <p><small>Description : {itemDetail.about}</small></p>
                <h4>Supplier : {itemDetail.supplier}</h4>
                <button
                    onClick={() => handleDeliveredQuantity(itemDetail._id)}
                    className='btn btn-danger'
                > Delivered <AiOutlineDeliveredProcedure /> </button>
            </div>
            <form onSubmit={handleUpdateQuantity}>
                <input type="text" name='quantity' placeholder='Quantity' autoComplete='off' /> <br />

                <button
                    className='btn btn-primary mt-3'
                >Add Quantity <MdAdd /></button>

            </form>

            <Link
                className='mt-4 mb-4 btn btn-dark text-info'
                to="/products">Manage Products <MdDoubleArrow /> </Link>
        </div>
    );
};

export default ManageQuantity;