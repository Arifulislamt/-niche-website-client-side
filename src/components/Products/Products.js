import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products, setProducts] = useState([]); 

    useEffect(()=> {
        fetch('https://gentle-inlet-34373.herokuapp.com/allProducts')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    return (
        <div className="container">
            <h1 className="text-center fw-bold my-5"><span className="text-warning">New</span> Collocation</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.slice(0, 6).map(pd => <ProductsCard
                        key={pd._id}
                        pd={pd}
                    ></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default Products;