export default class HoroscopeService {
    constructor() {
        this.horoscopes = [
            {   sign : "Aries", date: "March 21 - April 19", img: "../assets/horoscope/aries.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Tarus", date: "April 20 - May 20", img: "../assets/horoscope/tarus.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Gemini", date: "May 21 - June 20", img: "../assets/horoscope/gemini.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Cancer", date: "June 21 - July 20", img: "../assets/horoscope/cancer.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Pisces", date: "July 21 - August 19", img: "../assets/horoscope/pisces.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Scorpian", date: "August 21 - September 19", img: "../assets/horoscope/scorpio.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Virgo", date: "September 21 - October 19", img: "../assets/horoscope/virgo.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Leo", date: "October 21 - November 19", img: "../assets/horoscope/leo.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Sagittarus", date: "November 21 - December 19", img: "../assets/horoscope/sagittarius.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Capricorn", date: "December 21 - January 19", img: "../assets/horoscope/capricorn.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Aquarius", date: "January 21 - February 19", img: "../assets/horoscope/aquarius.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Libra", date: "Febraury 21 - March 19", img: "../assets/horoscope/libra.jpg",
                content : "Your horoscope states that you will be having a great day today"
            },
        ]
    }

    // method to fetch horoscope data
    getHoroscope(){
        this.horoscopes;
    }
}