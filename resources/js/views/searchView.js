// * --- JAVASCRIPT MODELS IMPORT --- * \\
import { elements } from './base';

// -- EXPORTING FUNCTION | Gets the value of search filed input
export const getInput = () => {
    // Setting Item inside of a getInput function | localStorage
    localStorage.setItem('input', elements.searchInput.value);
    return elements.searchInput.value;
}
// -- EXPORTING FUNCTION | Clearing input from the search bar
export const clearInput = () => {
    elements.searchInput.value = '';
};

// -- EXPORTING FUNCTION | Clearing HTML li elements from the results
export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
};

// -- EXPORTING FUNCTION | localStorage getting items (readData)
export const readStorage = () => {
    const storage = localStorage.getItem('input'); // If its empty, returns null
    // Restoring from local storage
    return elements.searchInput.value = storage;
};

// -- PRIVATE FUNCTION | Checking if there is a postal code
const postalCodeShow = (postalCode) => {
    if (!postalCode || 0 === postalCode.length) {
        return 'N/A';
    } else {
        return postalCode;
    }
}

// -- EXPORTING FUNCTION | Rendering UI - Cities
export const renderCities = city => {
    const markup = `
    <li>
        <a class="header__search__suggestions__link" href="#${city.Key}">
            <h3>${city.LocalizedName}, ${city.Country.ID}, ${postalCodeShow(city.PrimaryPostalCode)} <span class="header__search__suggestions__rank">Rank: ${city.Rank}</span></h3>
        </a>
    </li>
    `;
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

// -- EXPORTING FUNCTION | - Rendering Search Results 
export const renderResults = (cities) => {
    cities.forEach(renderCities); // Loop trough all results and call renderCities
};