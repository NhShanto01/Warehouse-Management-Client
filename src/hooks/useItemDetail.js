import { useEffect, useState } from 'react';

const useItemDetail = (id) => {
    const [itemDetail, setItemDetail] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setItemDetail(data))

    }, [itemDetail]);
    return [itemDetail]
};

export default useItemDetail;