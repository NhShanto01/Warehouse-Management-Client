import React from 'react';

const AddItems = () => {

    fetch('http://localhost:5000/myProduct', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .then(products => { })


    return (
        <div>
            <h2>this is add item</h2>

        </div>
    );
};

export default AddItems;