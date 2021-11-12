import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// 
const ProductsCard = (props) => {
    const {_id,name, image, description,price } = props.pd;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <h6 className="card-title">Price: <span style={{color: "tomato", fontWeight: "bold"}}>${price}</span></h6>
                    <p className="card-text">{description}</p>
                    </div>
                    <div className="card-footer">
                    <Link to={`/products/${_id}`}>
                    <Button className="w-100 btn-secondary fw-bold">More Details</Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;