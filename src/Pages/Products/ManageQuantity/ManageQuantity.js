import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageQuantity = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [isReload, setIsReload] = useState(false);
    console.log('user', user.quantity);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))

    }, [isReload]);

    const handleUpdateQuantity = e => {
        e.preventDefault();

        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity) + parseInt(user?.quantity);
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
                    toast.success('hello broh')
                });
        }
    };
    const handleDeliveredQuantity = (id) => {
        // e.preventDefault();

        const quantity = user?.quantity;
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

            });
    };
    return (
        <div>
            <div>
                <img src={user.image} alt="" />
                <h2>{user.name}</h2>
                <p>Price : {user.price}</p>
                <p><b>Quantity : {user.quantity}</b></p>
                <p><small>Description : {user.about}</small></p>
                <h4>Supplier : {user.supplier}</h4>
                <button
                    onClick={() => handleDeliveredQuantity(user._id)}
                    className='btn btn-danger'
                > Delivered </button>
            </div>
            <form onSubmit={handleUpdateQuantity}>
                <input type="text" name='quantity' placeholder='Quantity' />

                <input type="submit" value="Quantity"
                    placeholder='Add Quantity' />

            </form>
        </div>
    );
};

export default ManageQuantity;