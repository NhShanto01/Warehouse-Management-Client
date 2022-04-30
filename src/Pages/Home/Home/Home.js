import React from 'react';
import useProducts from '../../hooks/useProducts';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import SectionOne from '../SectionOne/SectionOne';
import SectionTwo from '../SectionTwo/SectionTwo';

const Home = () => {
    const [products, setProducts] = useProducts();

    const showProductItem = products.slice(0, 6);
    return (
        <div>
            <Banner></Banner>
            <SectionOne></SectionOne>
            <div className='row container mx-auto'>
                {
                    showProductItem.map(products => <Product
                        key={products._id}
                        products={products}
                    ></Product>)
                }
            </div>
            <SectionTwo></SectionTwo>
        </div>
    );
};

export default Home;