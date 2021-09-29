import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

export default class BannerService {
    constructor() {
        this.quote = {
            message : "there is no better boat than horoscope for a man to cross the sea of life",
            writer : "Varahamihira"
        }; 

        this.banners = [
            { id : 1, path : banner1 },
            { id : 2, path : banner2 },
            { id : 3, path : banner3 },
            { id : 4, path : banner1 },
        ]
    }

    // method to fetch banner data
    getBanners() {
        return this.banners;
    } 

    // method to fetch quotes
    getQuotes() {
        return this.quote;
    }
}

