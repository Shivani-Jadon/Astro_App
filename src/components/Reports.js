import React from 'react'
import SectionHeader from './SectionHeader';

const msg = "Leading astrologer from India are just a phonecall away";

const offers = () => {
    <div>
        <div>
            <img src="" alt="image"></img>
        </div>
        <div>
            <span>price</span>
            <button>Buy Now</button>
        </div>
    </div>
}

function Reports() {
    return (
        <div>           
            <SectionHeader heading="Daily Horoscope" msg={msg}/>
            <ul>{offers}</ul>
        </div>
    )
}

export default Reports;
