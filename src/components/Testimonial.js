import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import ReviewService from '../services/review-service';

function Testimonial() {
    let [reviews, setReviews] = useState([]);
    useEffect(() => {
        const service = new ReviewService
        setReviews(service.getReviews());
    }, []);

    const reviewData = () => {
    return (
            reviews.map(review => (
                <div>
                    <div>" {review.content}</div>
                    <div><ProfileIcon /></div>
                    <div>
                        <div>{review.name}</div>
                        <div>{review.location}</div>
                    </div>
                </div>
            ))
        )      
    }

    return (
        <div>
            <SectionHeader heading={"Hear from our happy customers"} seeAll={false} msg={undefined} />
            <ul>{reviewData()}</ul>
        </div>
    )
}

export default Testimonial;
