// * --- WEBPACK IMPORT FILES --- * \\
import '../sass/main.scss';
// * --- JAVASCRIPT MODELS IMPORT --- * \\
import Search from './models/Search';
import * as searchView from './views/searchView';
import * as forecastView from './views/forecastDataView';
import * as dailyForecastView from './views/dailyForecastView';
import { elements, renderLoader, clearLoader } from './views/base';
import ForecastData from './models/ForecastData';
import DailyForecast from './models/DailyForecast';

// GLOBAL STATE OF THE APP
const state = {}; // Global state object

// --------------------------------------------
//  SEARCH FUNCTION | ARCHITECTURE | CONTROLLER
// --------------------------------------------
const controlSearch = async () => {
    // Get a query from the view/input form
    const query = searchView.getInput(); // Gets input from search field

    if (query) {
        // Create new search object and add it to the state
        state.search = new Search(query);

        // Prepare UI
        searchView.clearResults();

        try {
            // Search cities
            await state.search.getResults();

            // Render results on UI
            searchView.renderResults(state.search.cities);
        } catch (error) {
            console.log(error);
        }
    }
};

// -- EVENT LISTENER | SEARCH EVENT -- \\
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
// -- EVENT LISTENER | DELETING SEARCH RESULT LIST -- \\
elements.searchResultList.addEventListener('click', () => {
    searchView.clearResults();
});

// -- EVENT LISTENER | Restoring search input data from localStorage
window.addEventListener('load', () => {
    const id = window.location.hash.replace('#', ''); 
    if (id) {
        searchView.readStorage();
    } else {
        return null;
    }
});

// --------------------------------------------
//  FORECAST DATA | ARCHITECTURE | CONTROLLER
// --------------------------------------------
const controlForecastData = async () => {
    // Get KEY/ID of location from URL
    const id = window.location.hash.replace('#', ''); 

    if (id) { // If there is an ID in url
        // Prepare UI for changes
        forecastView.clearForecastData();
        renderLoader(elements.forecastData);

        // Creates new city forecast data object
        state.cityForecast = new ForecastData(id);

        try {
            // Get forecast data
            await state.cityForecast.getForecastData();

            // Render forecast data
            forecastView.renderForecastData(state.cityForecast);
            clearLoader();
        } catch (error) {
            console.log(error);
        }
    }
};
// Hashchange and calling ForecastData controller
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlForecastData));

// -------------------------------------------------
//  FORECAST DAILY DATA | ARCHITECTURE | CONTROLLER
// -------------------------------------------------
const controlDailyForecastData = async () => {
    // Get KEY/ID of location from URL
    const id = window.location.hash.replace('#', ''); 
    
    if (id) {
        // Prepare UI

        // Create new forecast daily data object
        state.dailyForecast = new DailyForecast(id);

        try {
            // Get Daily Forecast Data
            await state.dailyForecast.getDailyForecastData();

            // Render Daily Forecast Data
            dailyForecastView.renderDailyForecastData(state.dailyForecast);
        } catch (error) {
            console.log(error);
        }
    }
};
// Hashchange and calling DailyForecastData controller
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlDailyForecastData));