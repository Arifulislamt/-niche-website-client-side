import React, { useEffect, useState } from 'react';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

   
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
            
    }, []);

    return (
           <div>
            <div className="container my-5">
                <h1 className="text-center fw-bold my-5"><span className="text-warning">All</span> Collocations</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(pd => <ManageProductsCard
                            key={pd._id}
                            pd={pd}
                        ></ManageProductsCard>)}
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;