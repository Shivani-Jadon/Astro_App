import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader';
import HoroscopeService from '../services/horoscope-service';

const msg = "Read your daily horoscope based of your sunshine";


function Horoscope() {
    const [sunsigns, setSunsign] = useState([]);

    useEffect(() => {
        const horoscopeObj = new HoroscopeService();
        setSunsign(horoscopeObj.getHoroscope());
    }, [])


    return (
        <div>
            <SectionHeader heading={"Daily Horoscope"} msg={msg} />
            {console.log(sunsigns)}
            <div>
                {
                    sunsigns.map(item => (
                        <div>
                            <div><img src={item.img} /></div>
                            <div>{item.sign}</div>
                            <div>{item.date}</div>
                        </div>                           
                    ))
                }
            </div>
        </div>
    )
}

export default Horoscope;
