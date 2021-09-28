import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader';
import ReportService from '../services/report-service';

function Reports() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const reportObj = new ReportService();
        setReports(reportObj.getReports());
    })

    const msg = "Leading astrologer from India are just a phonecall away";

    const offers = () => {
            <div>
                {                   
                    reports.map(report => {
                        <div>
                            <img src={report.path} alt="image" />
                            <div>
                                <span>{report.price}</span> 
                                <button>Buy Now</button>   
                            </div>
                        </div>
                    })
                }
            </div>
    }

    return (
        <div>           
            <SectionHeader heading="Daily Horoscope" msg={msg}/>
            <ul>{offers}</ul>
        </div>
    )
}

export default Reports;
