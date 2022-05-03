import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import ManageInventory from '../ManageInventory/ManageInventory';

const Products = () => {
    const [products, setProducts] = useProducts();
    // console.log(products);
    return (
        <div>
            <h2 className='my-5'>Manage Inventory</h2>
            <div className='row container mx-auto mb-5'>
                {
                    products.map(products => <ManageInventory
                        key={products._id}
                        send={products}
                    ></ManageInventory>)
                }
            </div>
            <Link to="/additem" className='btn btn-info'> Add New Item</Link>
        </div>
    );
};

export default Products;