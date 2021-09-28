import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader';
import AstrologerService from '../services/astrologer-service';

const msg = "Leading astrologer from India are just a phonecall away";

function TalkSection() {
    const [astrologers, setAstrologer] = useState([]);

    useEffect(() => {
        const astrologerObj = new AstrologerService();
        setAstrologer( astrologerObj.getAstrologers() );
    })

    const details = () => {
        astrologers.map(astrologer => {
        <li>
            <div><img src={astrologer.image} /></div>
            <div>
                <span>{astrologer.name}</span>
                <span>4.9</span>
            </div>
            <div>{astrologer.speciality}</div>
            <div>
                <span>{astrolger.charges}</span>
                <button>Talk now</button>
            </div>
        </li>
         } )
    }

    return (
        <div>
            <SectionHeader heading="Daily Horoscope" msg={msg}/>
            <ul>{details}</ul>
        </div>
    )
}

export default TalkSection;