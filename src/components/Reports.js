import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader';
import ReportService from '../services/report-service';

function Reports() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const reportObj = new ReportService();
        setReports(reportObj.getReports());
    }, [])

    const msg = "Astrology reports basically knowna as horoscope report are available";

    const offers = () => {
           return  (                  
                    reports.map(report => (
                        <div key={report.id} className="offers">
                            <img src={report.path} alt="image" />
                            <div className="offer-label">
                                <span>&#8377; {report.price}/min</span> 
                                <button className="btn">Buy Now</button>   
                            </div>
                        </div>
                    ))
            )
    }

    return (
        <div>           
            <SectionHeader heading="Reports" msg={msg}/>
            <div className="report-container">{offers()}</div>
        </div>
    )
}

export default Reports;
