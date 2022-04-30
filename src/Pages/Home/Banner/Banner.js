import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../image/sports1_540x360.jpg';
import img2 from '../../../image/inventory.png';
import img3 from '../../../image/istockphoto_540x360.jpg';
// import img4 from '../../../image/inventory2.png';

const Banner = () => {
    return (
        <div className='container'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-light'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-light'>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Fouth slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
};

export default Banner;