import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import ManageInventory from '../ManageInventory/ManageInventory';
import { MdOutlineAddShoppingCart } from "react-icons/md";


const Products = () => {
    const [products, setProducts] = useProducts();

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
            setProducts(products.filter(product => product._id !== id));
        }
    };

    return (
        <div>
            <h2 className='my-5'>Manage Inventory</h2>
            <div className='row container mx-auto mb-5'>
                {
                    products.map(products => <ManageInventory
                        key={products._id}
                        send={products}
                        handleDeleteBtn={handleDeleteBtn}
                    ></ManageInventory>)
                }
            </div>
            <Link to="/additem" className=' mb-4 btn btn-dark text-info'> Add New Item <MdOutlineAddShoppingCart /> </Link>
        </div>
    );
};

export default Products;