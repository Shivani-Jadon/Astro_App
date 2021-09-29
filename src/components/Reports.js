import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader';
import ReportService from '../services/report-service';

function Reports() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const reportObj = new ReportService();
        setReports(reportObj.getReports());
    })

    const msg = "Astrology reports basically knowna as horoscope report are available";

    const offers = () => {
           return  (                  
                    reports.map(report => (
                        <div>
                            <img src={report.path} alt="image" />
                            <div>
                                <span>{report.price}</span> 
                                <button>Buy Now</button>   
                            </div>
                        </div>
                    ))
            )
    }

    return (
        <div>           
            <SectionHeader heading="Reports" msg={msg}/>
            <div>{offers()}</div>
        </div>
    )
}

export default Reports;
