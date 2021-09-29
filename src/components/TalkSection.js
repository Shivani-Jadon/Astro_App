import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader';
import AstrologerService from '../services/astrologer-service';

const msg = "Leading astrologer from India are just a phonecall away";

function TalkSection() {
    const [astrologers, setAstrologer] = useState([]);

    useEffect(() => {
        const astrologerObj = new AstrologerService();
        setAstrologer( astrologerObj.getAstrologers() );
        // console.log(astrologers);
    }, [])

    const details = () => {
        return astrologers.map(astrologer => (
        <div>
            <div><img src={astrologer.image} /></div>
            <div>
                <span>{astrologer.name}</span>
                <span>4.9</span>
            </div>
            <div>{astrologer.speciality[0]}</div>
            <div>
                <span>{astrologer.charges}</span>
                <button>Talk now</button>
            </div>
        </div>
         ) )
    }

    return (
        <div>
            <SectionHeader heading="Daily Horoscope" msg={msg}/>
            <div>
                {console.log(astrologers)}
                {details()}
            </div>
        </div>
    )
}

export default TalkSection;