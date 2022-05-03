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

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are You Sure For This?');
        if (proceed) {
            const url = ``;
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
        <div>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <h2>Featured Products</h2>
            <div className='row container mx-auto'>
                {
                    showProductItem.map(products => <ManageInventory
                        key={products._id}
                        send={products}
                        sendEvent={handleDeleteBtn}
                    ></ManageInventory>)
                }
            </div>
            <Link to="/products" className='btn btn-info text-light'> See More</Link>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;