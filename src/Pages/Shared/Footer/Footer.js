import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='footer'>
            <div className='social'>
                <a href="https://www.facebook.com/profile.php?id=100010318328703"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/md-nur-hossain-shanto-983904229/"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/_nur_hossain_00/"><FaInstagram /> </a>
                <a href="https://github.com/NhShanto01"><FaGithub /></a>
            </div>

            <ul className='list'>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="products">Products</Link>
                </li>
                <li>
                    <Link to="blog">Blogs</Link>
                </li>
                <li>
                    <Link to="contact">Contact us</Link>
                </li>
                <li>
                    <Link to="home">Privacy Policy</Link>
                </li>
            </ul>
            <p className='copyright'>&copy; Copyright {year} - <span className='text-info'><b>Sports Zone </b></span>. All Rights Reserved</p>
        </section>
    );
};

export default Footer;