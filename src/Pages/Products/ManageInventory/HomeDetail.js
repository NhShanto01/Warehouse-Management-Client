import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ManageInventory from './ManageInventory';

const HomeDetail = () => {
    const [products, setProducts] = useProducts();
    // console.log(products, 'this is product');

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are You Sure For This?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingItems = products.filter(product => product._id !== id);
                    setProducts(remainingItems);
                })
        }
    }
    return (
        <div className='container gx-3 row'>
            {
                products.map(pd => <ManageInventory
                    key={products._id}
                    send={products}
                    sendEvent={handleDeleteBtn}
                ></ManageInventory>)
            }
        </div>
    );
};

export default HomeDetail;