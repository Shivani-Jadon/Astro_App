import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader';
import HoroscopeService from '../services/horoscope-service';

const msg = "Read your daily horoscope based of your sunshine";


function Horoscope() {
    const [sunsign, setSunsign] = useState([]);

    useEffect(() => {
        const horoscopeObj = new HoroscopeService();
        setSunsign(horoscopeObj.getHoroscope());
    })

    const data = () =>{
        sunsign.map(item => {
            <li>
                <div><img alt="Horoscope" src={item.image}/> </div>
                <div>{item.sign}</div>
                <div>{item.date}</div>
            </li>
        })

    }

    return (
        <div>
            <SectionHeader heading={"Daily Horoscope"} msg={msg} />
           
            <ul>{data}</ul>
        </div>
    )
}

export default Horoscope;
