import aries from "../assets/images/horoscope/aries.jpg"
import tarus  from "../assets/images/horoscope/tarus.jpg"
import gemini from "../assets/images/horoscope/gemini.jpg"
import cancer from "../assets/images/horoscope/cancer.jpg"
import pisces from "../assets/images/horoscope/pisces.jpg"
import scorpian from "../assets/images/horoscope/scorpio.jpg"
import virgo from "../assets/images/horoscope/virgo.jpg"
import leo from "../assets/images/horoscope/leo.jpg"
import sagittarius from "../assets/images/horoscope/sagittarius.jpg"
import capricorn from "../assets/images/horoscope/capricorn.jpg"
import aquarius from "../assets/images/horoscope/aquarius.jpg"
import libra from "../assets/images/horoscope/libra.jpg"



export default class HoroscopeService {
    constructor() {
        this.horoscopes = [
            {   sign : "Aries", date: "March 21 - April 19", img: aries,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Tarus", date: "April 20 - May 20", img: tarus,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Gemini", date: "May 21 - June 20", img: gemini,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Cancer", date: "June 21 - July 20", img: cancer,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Pisces", date: "July 21 - August 19", img: pisces,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Scorpian", date: "August 21 - September 19", img: scorpian,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Virgo", date: "September 21 - October 19", img: virgo,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Leo", date: "October 21 - November 19", img: leo,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Sagittarus", date: "November 21 - December 19", img: sagittarius,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Capricorn", date: "December 21 - January 19", img: capricorn,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Aquarius", date: "January 21 - February 19", img: aquarius,
                content : "Your horoscope states that you will be having a great day today"
            },
            {   sign : "Libra", date: "Febraury 21 - March 19", img: libra,
                content : "Your horoscope states that you will be having a great day today"
            },
        ]
    }

    // method to fetch horoscope data
    getHoroscope(){
        return this.horoscopes;
    }
}