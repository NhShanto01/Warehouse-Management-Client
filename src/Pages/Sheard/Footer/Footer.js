import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='footer'>
            <div className='social'>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /> </a>
                <a href="#"><FaGithub /></a>
            </div>

            <ul className='list'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            <p className='copyright'><small>&copy; Copyright {year} - <span className='text-info'><b>Sports Zone </b></span>. All Rights Reserved</small></p>
        </section>
    );
};

export default Footer;