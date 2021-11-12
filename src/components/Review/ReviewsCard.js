import React from 'react';

const ReviewsCard = (props) => {
    const {email,image,name,description} = props.review;
    return (
        <div className="col">
        <div className="card h-100">
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold"><span style={{color: "tomato"}}>{name}</span></h4>
            <h6 className="card-title">{email}</h6>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default ReviewsCard;


