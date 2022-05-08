import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import DisplayOwnItem from '../DisplayOwnItem/DisplayOwnItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [ownItems, setOwnItems] = useState([])
    const [removes, setRemoves] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setOwnItems(data))

    }, []);

    const handleDeleteBtn = id => {

        const proceed = window.confirm('Are You Sure For This?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            const remaining = removes.filter(remove => remove._id !== id);
            setRemoves(remaining);
        }
    };
    const email = user.email;
    const rest = ownItems.filter(ownItem => ownItem.email === email);


    return (
        <div>
            {
                rest.map(item => <DisplayOwnItem
                    key={item._id}
                    send={item}
                    handleDeleteBtn={handleDeleteBtn}
                ></DisplayOwnItem>)
            }
        </div>
    );
};

export default MyItem;