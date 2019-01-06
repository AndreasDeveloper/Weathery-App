// * --- IMPORTING FILES --- * \\
import axios from 'axios';
import { apiKey } from '../config.js';

// -- SEARCH MODEL -- \\
export default class AutocompleteSearch {
    constructor (query) {
        this.query = query;
    }
    // Making AJAX Call - Getting City Names array from AccuWeather
    async getAutoSearch() {
        const citiesA = []; // citiesA = citiesAutocomplete
        const res = await axios(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${this.query}`); // res stands for results
        try {
            this.citiesAutocomplete = res.data;
            citiesA.push(...this.citiesAutocomplete);
            //console.log(citiesA);
        } catch (error) {
            console.log(error);
        }
    }
    /*
    findMatches(wordToMatch, cities) {
        return cities.filter(place => {
            // If city or state matches search input
            const regex = new RegExp(wordToMatch, 'gi') // gi = global-insensitive
            return place.LocalizedName
        });
    }
    */
}