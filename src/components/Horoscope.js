import React from 'react'
import SectionHeader from './SectionHeader';

const msg = "Read your daily horoscope based on your sunshine";


function Horoscope() {
    const sunshine = 
    <li>
        <div><img alt="Horoscope" /> </div>
        <div>Sunshine</div>
        <div>Date</div>
    </li>

    return (
        <div>
            <SectionHeader heading={"Daily Horoscope"} msg={msg} />
           
            <ul>{sunshine}</ul>
        </div>
    )
}

export default Horoscope;
