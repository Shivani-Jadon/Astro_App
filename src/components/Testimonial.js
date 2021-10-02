import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import ReviewService from '../services/review-service';
import { Paper } from '@material-ui/core';

function Testimonial() {
    let [reviews, setReviews] = useState([]);
    useEffect(() => {
        const service = new ReviewService
        setReviews(service.getReviews());
    }, []);

    const reviewData = () => {
    return (
            reviews.map(review => (
                <Paper elavation={3} className="review">
                    <div className="review-msg">{review.content}</div>
                    <div className="profile-icon"><ProfileIcon className="icon"/></div>
                    <div className="reviewer">
                        <div className="reviewer-name">{review.name}</div>
                        <div className="reviewer-location">{review.location}</div>
                    </div>
                </Paper>
            ))
        )      
    }

    return (
        <div>
            <SectionHeader heading={"Hear from our happy customers"} seeAll={false} msg={undefined} />
            <div className="review-container">{reviewData()}</div>
        </div>
    )
}

export default Testimonial;
