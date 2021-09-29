// astrologers data has been taken as dummy data
// the same can be used with rest services
// instead of dummy data real data is used with rest methods

import astrologer1 from "../assets/images/astrologer1.jpg"
import astrologer2 from "../assets/images/astrologer2.jpg"
import astrologer3 from "../assets/images/astrologer3.jpg"
import astrologer4 from "../assets/images/astrologer4.jpg"
import astrologer5 from "../assets/images/astrologer5.jpg"


export default class AstrologerService {
    constructor() {
        this.astrologers = [
            {name: "Dummy Name 1", speciality: ["Vastu","Palmistry","Vedic Astrology","Face reading", "Tarot"],
             language: ["hindi","english"], charges: 100, experience: 25, image: astrologer1},

            {name: "Dummy Name 2", speciality: ["Vastu","Kundali Dosh","Tarot"],
             language: ["tamil","english"], charges: 200, experience: 20, image: astrologer2},

            {name: "Dummy Name 3", speciality: ["Palmistry","Numerology","Face reading", "Tarot"],
             language: ["english"], charges: 250, experience: 30, image: astrologer3},

            {name: "Dummy Name 4", speciality: ["Vedic Astrology"],
             language: ["hindi","marathi"], charges: 150, experience: 15, image: astrologer4},

            {name: "Dummy Name 5", speciality: ["Numerology", "FAce Reading"],
             language: ["english"], charges: 70, experience: 15, image: astrologer5}
        ]
    }

    // service method to fetch data of astrologers
    getAstrologers() {
        return this.astrologers;
    }

    // service method that will return searched astrologers that return search result
    searchAstrologers(keyword) {
        return this.astrologers.filter(item => {
            for(let val in item){
              let s = item[val].toString();
              
              if(s.includes(keyword)){
                console.log(s);
                return item;
              }
            }
        })
    }

    // Sorting service method based on experience low to high
    sortExperienceAsc() {
        let dummy = this.astrologers;

        dummy.sort((a,b) => a.experience - b.experience);

        return dummy;
    }

    // Sorting service based on pricing low to high
    sortPriceAsc() {
        let dummy = this.astrologers;

        dummy.sort((a,b) => a.charges - b.charges);

        return dummy;
    }

    // Sorting service based on experince high to low
    sortExperienceDesc() {
        let dummy = this.astrologers;

        dummy.sort((a,b) => b.experience - a.experience);

        return dummy;
    }

    // Sorting service based on pricing based on high to low
    sortPriceDesc() {
        let dummy = this.astrologers;

        dummy.sort((a,b) => b.charges - a.charges);

        return dummy;
    }

    // filtering service based on language
    filterLanguage(language){
        return this.astrologers.filter(astrologer => {
            // for language filter taking as multiple inputs
            // for(let l of language){
            //     if(astrologer.language.includes(l))
            //         return astrologer;
            // }

            // for language filter taking single input (like for this case)
            if(astrologer.language.includes(language))
                return astrologer;
        })
    }
}
