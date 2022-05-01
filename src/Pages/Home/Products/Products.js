import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageInventory from '../ManageInventory/ManageInventory';

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2 className='my-5'>Manage Inventory</h2>
            <div className='row container mx-auto mb-5'>
                {
                    products.map(products => <ManageInventory
                        key={products._id}
                        products={products}
                    ></ManageInventory>)
                }
            </div>
        </div>
    );
};

export default Products;