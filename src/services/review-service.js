export default class ReviewService {
    constructor() {
        this.reviews = [
            { id : 1, name : "Customer 1 ", location : "Delhi", content : "Very pleased with the horoscope report" },
            { id : 2, name : "Customer 2 ", location : "Mumbai", content : "100% satisfactory and fruitful" },
            { id : 3, name : "Customer 3 ", location : "Kolkata", content : "Horoscope report quite accurate and the remedies" },
            { id : 4, name : "Customer 4 ", location : "Hyderabad", content : "Very pleased with the horoscope report" },
        ]
    }

    // method to fetch banner data
    getReviews() {
        return this.reviews;
    } 

}