import React, { useEffect, useState } from 'react';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allReview')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div>
            <h1 style={{ marginTop: "200px", marginBottom: "60px" }} className="fw-bold text-center "><span className="text-warning">Customer</span> Reviews </h1>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        reviews.map(review => <ReviewsCard
                        key={review._id}
                            review={review}
                        ></ReviewsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;