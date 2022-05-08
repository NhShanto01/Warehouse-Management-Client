import React from 'react';

const DisplayOwnItem = (props) => {
    const { _id, name, price } = props.send;
    const handleDeleteBtn = props.handleDeleteBtn;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Price : {price}</p>
            <button
                onClick={() => handleDeleteBtn(_id)}
                className='btn btn-danger me-3'>Delete </button>
        </div>
    );
};

export default DisplayOwnItem;