import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='container'>
            <Carousel fade className=' fs-3'>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src='https://i.ibb.co/nzwGKv3/Sports-goods-600x400.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-info'>
                        <h3>Sports-high-quality-goods</h3>
                        <p>In addition to our high quality standards.Naturally, the highest level of safety as well as simple and quick handling of the equipment is of great importance to us</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src='https://i.ibb.co/vBL8fQd/soccer-ball-warehouse-600x400.png'
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-info'>
                        <h3>Sports and health</h3>
                        <p>Sports and health go hand in hand, offering people all over the world, of different abilities and ages, the chance for happier, healthier and more productive lives.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src='https://i.ibb.co/7nMvm91/Career-in-Sports-01-600x400.png'
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-info'>
                        <h3>Career-in-Sports</h3>
                        <p>Just a privileged few athletes make it to the summit of playing professional sports. Luckily for job seekers searching for off-field careers in this field</p>
                    </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://i.ibb.co/vdCT8QH/soccer-manufacturing.jpg'
                        alt="Fouth slide"
                    />

                    <Carousel.Caption className='text-info'>
                        <h3>Soccer-manufacturing</h3>
                        <p>There are two main elements of the soccer ball. One is the inner bladder, the second is the outer covering. Sometimes the whole soccer ball is made under one roof.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;