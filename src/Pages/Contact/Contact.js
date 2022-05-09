import React from 'react';
import { BsTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './Contact.css';


const Contact = () => {
    return (
        <div className='container mt-5 mb-5 fs-4'>
            <h1>Contact Us</h1>
            <hr />
            <div className='phone mt-3'>
                <h2>With Phone</h2>
                <p><BsTelephoneFill /> Mobile Number : 01923456789</p>
            </div>

            <hr />

            <div className='email mt-3'>
                <h2>With Email Address</h2>
                <p><MdAlternateEmail />
                    Email Address : Sports.zone01@gmail.com</p>
            </div>

            <hr />

            <div className='social mt-3'>
                <h2>With Social Media</h2>
                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/"><FaInstagram /> </a>
            </div>
        </div>
    );
};

export default Contact;