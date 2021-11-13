import React, { useEffect, useState } from 'react';
import MoreCarsCard from './MoreCarsCard';

const AllCars = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://gentle-inlet-34373.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
            
    }, []);
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-center fw-bold my-5"><span className="text-warning">More</span> Collocation</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(pd => <MoreCarsCard
                            key={pd._id}
                            pd={pd}
                        ></MoreCarsCard>
                        )}
                </div>
            </div>
        </div>
    );
};

export default AllCars;