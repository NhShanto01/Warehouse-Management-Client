import { useEffect, useState } from 'react';

const useItemDetail = (id) => {
    const [itemDetail, setItemDetail] = useState([]);

    useEffect(() => {
        fetch(`https://young-retreat-52384.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setItemDetail(data))

    }, [itemDetail]);
    return [itemDetail]
};

export default useItemDetail;