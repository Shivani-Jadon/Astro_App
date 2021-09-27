import React from 'react';
import SectionHeader from './SectionHeader';
import ProfileIcon from '@material-ui/icons/AccountCircle';

function Testimonial() {
    const review = 
    <div>
        <div>" My review</div>
        <div><ProfileIcon /></div>
        <div>
            <div>Name</div>
            <div>Location</div>
        </div>
    </div>

    return (
        <div>
            <SectionHeader heading={"HEar from our happy customers"} seeAll={false} msg={undefined} />
            <ul>{review}</ul>
        </div>
    )
}

export default Testimonial;
