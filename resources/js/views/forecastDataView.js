// --- IMPORTING MODELS --- \\
import { elements } from './base';

// -- EXPORTING FUNCTION | - Clearing Forecast Data HTML 
export const clearForecastData = () => {
    elements.forecastDataDiv.innerHTML = '';
};

// -- PRIVATE FUNCTION | - Capitalizing first letter 
const capitalizeFirstLetter = (string) => {
    if (!string || 0 === string.length) {
        return 'N/A';
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

// -- PRIVATE FUNCTION | - Formating date and time
const formatTime = (currTime) => {
    return currTime.slice(0, 10).replace(/-/g, '.')
    .replace(/$/, '.'); // Adds dot at the end of digit
};

// -- PRIVATE FUNCTION | - Displaying icon related to current weather
const displayIcon = (currCategory) => {
    if (currCategory === 'Rain' || currCategory === 'rain' || currCategory === 'snow/rain') {
        return `<i class="icon ion-ios-rainy"></i>`;
    } else if (currCategory === 'Wind' || currCategory === 'wind') {
        return `<i class="icon ion-ios-leaf"></i>`;
    } else if (currCategory === 'Snow' || currCategory === 'snow') {
        return `<i class="icon ion-ios-snow"></i>`;
    } else if (currCategory === 'Heat' || currCategory === 'heat') {
        return `<i class="icon ion-ios-sunny"></i>`;
    } else if (currCategory === 'Thunderstorm' || currCategory === 'thunderstorm') {
        return `<i class="icon ion-ios-thunderstorm"></i>`;
    } else if (currCategory === 'Cold' || currCategory === 'cold') {
        return `<i class="icon ion-ios-thermometer"></i>`;
    } else if (currCategory == undefined || currCategory === '' || currCategory == null) { // If current Category in JSON data is empty string/null/undefined return X
        return `<i class="icon ion-ios-close"></i>`;
    }
};

// -- EXPORTING FUNCTION | - Rendering Forecast Data on HTML
export const renderForecastData = (city) => {
    const markup = `
    <h2 class="forecast-data__date">Showing Forecast For : ${formatTime(city.date)}</h2>
    <h2 class="forecast-data__location">- ${elements.searchInput.value} -</h2>
    <div class="current-wrapper">
        <h2 class="current-wrapper__weather-icon">${displayIcon(city.category)}</h2>
        <h2 class="current-wrapper__weather">Current Weather Status: ${capitalizeFirstLetter(city.category)}</h2>
        <h2 class="current-wrapper__current-temp">Current Temperature: ${city.currTempV} ${city.currTempU}&#176;</h2>
        <h3 class="current-wrapper__temp-heading">Expected Temperature For Today</h3>
        <h3 class="current-wrapper__temp-max"><i class="icon ion-md-arrow-dropup current-wrapper__temp-max-icon"></i>Maximum: ${city.tempMaxV} ${city.tempMaxU}&#176;</h3>
        <h3 class="current-wrapper__temp-min"><i class="icon ion-md-arrow-dropdown current-wrapper__temp-min-icon"></i>Minimum: ${city.tempMinV} ${city.tempMinU}&#176;</h3>
    </div>
    <div class="day-night-wrapper">
        <h3 class="day-night-wrapper__dn-heading">Expected Weather For Today</h3>
        <p class="day-night-wrapper__day">Expected for Today: ${city.dayIp}</p>
        <p class="day-night-wrapper__night">Expected for Tonight: ${city.nightIp}</p>
    </div>
    <div class="report-wrapper">
        <h3 class="report-wrapper__report">${formatTime(city.date)} - Report</h3>
        <p class="report-wrapper__short-text">${city.shortText}.</p>
        <p class="report-wrapper__severity">Severity: ${city.severity}</p>
    </div>
    `;
    elements.forecastDataDiv.insertAdjacentHTML('afterbegin', markup);
}; 