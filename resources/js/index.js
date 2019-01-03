// * --- WEBPACK IMPORT FILES --- * \\
import '../sass/main.scss';
// * --- JAVASCRIPT MODELS IMPORT --- * \\
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';


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

        // Search cities
        await state.search.getResults();

        // Render results on UI
        console.log(state.search.cities);
    }
};

// -- EVENT LISTENER | SEARCH EVENT -- \\
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});