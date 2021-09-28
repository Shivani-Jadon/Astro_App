export default class BannerService {
    constructor() {
        this.quote = {
            message : "there is no better boat than horoscope for a man to cross the sea of life",
            writer : "Varahamihira"
        }; 

        this.banners = [
            { id : 1, path : "../assets/images/banner1.jpg" },
            { id : 2, path : "../assets/images/banner2.jpg" },
            { id : 3, path : "../assets/images/banner3.jpg" },
            { id : 4, path : "../assets/images/banner1.jpg" },
        ]
    }

    // method to fetch banner data
    getBanners() {
        this.banners;
    } 

    // method to fetch quotes
    getQuotes() {
        this.quote;
    }
}

