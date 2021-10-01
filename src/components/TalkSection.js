import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader';
import AstrologerService from '../services/astrologer-service';

const msg = "Leading astrologer from India are just a phonecall away. Consult astrolgers for all your problems and remedies";

function TalkSection() {
    const [astrologers, setAstrologer] = useState([]);

    useEffect(() => {
        const astrologerObj = new AstrologerService();
        setAstrologer( astrologerObj.getAstrologers() );
        // console.log(astrologers);
    }, [])

    const details = () => {
        return astrologers.map(astrologer => (
        <div className="astrologer-content">
            <div className="astrologer-img"><img src={astrologer.image} /></div>
            <div className="info-1">
                <span>{astrologer.name}</span>
                <span>4.9</span>
            </div>
            <div className="info-2">{astrologer.speciality[0]}</div>
            <div className="info-3">
                <span>{astrologer.charges}</span>
                <button>Talk now</button>
            </div>
        </div>
         ) )
    }

    return (
        <div>
            <SectionHeader heading="Daily Horoscope" msg={msg}/>
            <div className="astrologer-container">
                {console.log(astrologers)}
                {details()}
            </div>
        </div>
    )
}

export default TalkSection;