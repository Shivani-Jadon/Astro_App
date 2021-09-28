export default class ReportService {
    constructor() {
        this.reports = [
            { id : 1, path : "../assets/images/report1.jpg", price : 1000 },
            { id : 2, path : "../assets/images/report2.jpg" , price : 1500 },
            { id : 3, path : "../assets/images/report3.jpg", price : 2000  }
        ]
    }

    // method to fetch banner data
    getReports() {
        this.reports;
    } 

}