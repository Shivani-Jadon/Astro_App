import report1 from "../assets/images/report1.jpg"
import report2 from "../assets/images/report2.jpg"
import report3 from "../assets/images/report3.jpg"

export default class ReportService {
    constructor() {
        this.reports = [
            { id : 1, path : report1, price : 1000 },
            { id : 2, path : report2 , price : 1500 },
            { id : 3, path : report3, price : 2000  }
        ]
    }

    // method to fetch banner data
    getReports() {
        return this.reports;
    } 

}