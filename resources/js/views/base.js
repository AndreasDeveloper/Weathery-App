// --- CONTAINS ALL DOM ELEMENTS --- \\
export const elements = {
    searchForm: document.querySelector('.header__search'), // div searchbar
    searchInput: document.querySelector('.header__search__input'), // input
    searchResultList: document.querySelector('.header__search__suggestions'), // ul
    searchResultFullList: document.querySelector('.header__search__suggestions__list'), // li
    searchResultLink: document.querySelector('.header__search__suggestions__link'), // anchor tag
    forecastData: document.querySelector('.weather-data-page'), // section
    forecastDataDiv: document.querySelector('.forecast-data') // div
};

// -- EXPORTING FUNCTION | Holds loader
export const elementStrings = {
    loader: 'loader' // Connecting with SCSS/CSS
};

// -- EXPORTING FUNCTION | Rendering Loader 
export const renderLoader = parent => {
    const loader = `
    <div class="${elementStrings.loader}">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

// -- EXPORTING FUNCTION | Clearing/Deleting Loader 
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) { // If loader exist
        loader.parentElement.removeChild(loader);
    }
};