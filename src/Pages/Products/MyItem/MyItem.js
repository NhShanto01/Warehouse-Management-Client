import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useProducts from '../../../hooks/useProducts';
import DisplayOwnItem from '../DisplayOwnItem/DisplayOwnItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useProducts();
    const [ownItems, setOwnItems] = useState([])


    useEffect(() => {
        fetch('https://young-retreat-52384.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setOwnItems(data))

    }, [products, ownItems, user]);

    const handleDeleteBtn = id => {

        const proceed = window.confirm('Are You Sure For This?');
        if (proceed) {
            const url = `https://young-retreat-52384.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            const updateProducts = (products.filter(product => product._id !== id));
            setProducts(updateProducts);
        }
    };
    const email = user.email;
    const rest = ownItems.filter(ownItem => ownItem.email === email);


    return (
        <div>
            {
                rest.map(item => <DisplayOwnItem
                    key={item._id}
                    item={item}
                    handleDeleteBtn={handleDeleteBtn}
                ></DisplayOwnItem>)
            }
        </div>
    );
};

export default MyItem;