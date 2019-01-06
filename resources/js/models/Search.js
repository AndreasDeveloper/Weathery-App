// * --- IMPORTING FILES --- * \\
import axios from 'axios';
import { apiKey } from '../config.js';

// -- SEARCH MODEL -- \\
export default class Search {
    constructor (query) {
        this.query = query;
    }
    // Making AJAX Call - Getting City Names array from AccuWeather
    async getResults() {
        const res = await axios(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${this.query}&details=false&offset=0&alias=Never`); // res stands for results
        try {
            this.cities = res.data; // Full city DATA
            this.cityName = this.cities[0].LocalizedName; // Name of the city
            console.log(this.cities);
        } catch (error) {
            console.log(error);
        }
    }
}