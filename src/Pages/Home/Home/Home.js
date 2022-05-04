import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Banner from '../Banner/Banner';
import Product from '../../Products/Product/Product';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import ManageInventory from '../../Products/ManageInventory/ManageInventory';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useProducts();

    const showProductItem = products.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <h2>Featured Products</h2>
            <div className='row container mx-auto'>
                {
                    showProductItem.map(products => <Product
                        key={products._id}
                        products={products}

                    ></Product>)
                }
            </div>
            <Link to="/products" className='mt-4 btn btn-dark text-info'> See More</Link>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;