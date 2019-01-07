// * --- WEBPACK IMPORT FILES --- * \\
import '../sass/main.scss';
// * --- JAVASCRIPT MODELS IMPORT --- * \\
import Search from './models/Search';
import * as searchView from './views/searchView';
import * as forecastView from './views/forecastDataView';
import { elements } from './views/base';
import ForecastData from './models/ForecastData';

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

// --------------------------------------------
//  FORECAST DATA | ARCHITECTURE | CONTROLLER
// --------------------------------------------
const controlForecastData = async () => {
    // Get KEY/ID of location from URL
    const id = window.location.hash.replace('#', ''); 

    if (id) { // If there is an ID in url
        // Prepare UI for changes
        forecastView.clearForecastData();

        // Creates new city forecast data object
        state.cityForecast = new ForecastData(id);

        try {
            // Get forecast data
            await state.cityForecast.getForecastData();

            // Render forecast data
            forecastView.renderForecastData(state.cityForecast);
        } catch (error) {
            console.log(error);
        }
    }
}
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlForecastData));

// ----------------------------------------- \\
// -- CHANGING BACKGROUND IMAGE ON TIMER --  \\
// ----------------------------------------- \\
// - DOM ELEMENTS - \\
const header = document.querySelector('#header');

setInterval((function(images) {
        let index = -1, changeImage;
        const prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
		changeImage = function() {
			index = (index + 1) % images.length;
            header.classList.toggle(`${images[index]}`);
		};
		changeImage();
		return changeImage;
	}([
		'change-img-1',
		'change-img-2',
        'change-img-3',
        'change-img-4',
        'change-img-5',
	])), 6000);