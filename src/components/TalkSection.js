import React from 'react'
import SectionHeader from './SectionHeader';

const msg = "Leading astrologer from India are just a phonecall away";

const details = () => {
    <li>
        <div><img>Image</img></div>
        <div>
            <span>name</span>
            <span>rating</span>
        </div>
        <div>Expertise</div>
        <div>
            <span>Charges</span>
            <button>Talk now</button>
        </div>
    </li>
}

function TalkSection() {
    return (
        <div>
            <SectionHeader heading="Daily Horoscope" msg={msg}/>
            <ul>{details}</ul>
        </div>
    )
}

export default TalkSection;