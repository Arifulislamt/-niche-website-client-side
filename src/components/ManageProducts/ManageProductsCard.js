import React, { useState } from 'react';
import { Button} from 'react-bootstrap';

const ManageProductsCard = (props) => {
    const [controls, setControls] = useState(false);
    const {_id,name, image, description,price } = props.pd;

    const handleDeletes = (id) => {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" }
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount) {
                setControls(!controls);
                alert('Are you sure?');
      
              }
              else {
                setControls(false);
              }
            });
        
    }
    
    return (
        <div>
        <div className="col">
            <div className="card h-100 shadow-lg">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title fw-bold">{name}</h5>
                <h6 className="card-title">Price: <span style={{color: "tomato", fontWeight: "bold"}}>${price}</span></h6>
                <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                <Button onClick={() => handleDeletes(_id)} className="w-100 btn-secondary fw-bold text-warning">Delete Product</Button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ManageProductsCard;