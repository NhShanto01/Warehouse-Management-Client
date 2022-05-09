import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Banner from '../Banner/Banner';
import Product from '../../Products/Product/Product';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';
import { Link } from 'react-router-dom';
import PageName from '../../Shared/PageName/PageName';
import { MdDoubleArrow } from "react-icons/md";


const Home = () => {
    const [products, setProducts] = useProducts();

    const showProductItem = products.slice(0, 6);

    return (
        <>
            <PageName title="Home"></PageName>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <p className='fs-3'>Our</p>
            <h2 className='mb-4'>Featured Products</h2>
            <div className='row container mx-auto'>
                {
                    showProductItem.map(products => <Product
                        key={products._id}
                        products={products}

                    ></Product>)
                }
            </div>
            <Link to="/products" className='mt-4 btn btn-dark text-info'> Manage Products <MdDoubleArrow /> </Link>
            <SectionTwo></SectionTwo>
        </>
    );
};

export default Home;