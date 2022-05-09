import React from 'react';
import { AiFillDelete } from "react-icons/ai";

const DisplayOwnItem = ({ item, handleDeleteBtn }) => {
    const { _id, name, price } = item;

    return (
        <div className='container border border-dark mx-auto mt-5 mb-5 d-flex justify-content-evenly align-items-center '>
            <h3>Name: {name}</h3>
            <p>Price : {price}</p>
            <button
                onClick={() => handleDeleteBtn(_id)}
                className='btn btn-danger me-3'>Delete <AiFillDelete /> </button>
        </div>
    );
};

export default DisplayOwnItem;