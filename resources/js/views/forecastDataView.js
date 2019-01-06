// --- IMPORTING MODELS --- \\
import { elements } from './base';

// -- EXPORTING FUNCTION | - Clearing Forecast Data HTML 
export const clearForecastData = () => {
    elements.forecastDataDiv.innerHTML = '';
};

// -- PRIVATE FUNCTION | - Capitalizing first letter 
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// -- EXPORTING FUNCTION | - Rendering Forecast Data on HTML
export const renderForecastData = (city) => {
    const markup = `
    <h2 class="forecast-data__date">Showing Forecast for : ${city.date}</h2>
    <h2 class="forecast-data__location">- ${city.LocalizedName} -</h2>
    <h2 class="forecast-data__weather">Current Weather Status: ${capitalizeFirstLetter(city.category)}</h2>
    <div class="forecast-data__day-night-wrapper">
        <h3 class="forecast-data__day-night-heading">Expected Weather For Today</h3>
        <p class="forecast-data__day">Expected for Today: ${city.dayIp}</p>
        <p class="forecast-data__night">Expected for Tonight: ${city.nightIp}</p>
    </div>
    <div class="forecast-data__temp-wrapper">
        <h3 class="forecast-data__temp-heading">Expected Temperature For Today</h3>
        <p class="forecast-data__temp-max"><i class="icon ion-md-arrow-dropup forecast-data__temp-max-icon">Maximum: ${city.tempMaxV} ${city.tempMaxU}&#176;</i></p>
        <p class="forecast-data__temp-min"><i class="icon ion-md-arrow-dropdown forecast-data__temp-min-icon">Minimum: ${city.tempMinV} ${city.tempMinU}&#176;</i></p>
    </div>
    <div class="forecast-data__report-wrapper">
        <h3 class="forecast-data__report">${city.date} - Report</h3>
        <p class="forecast-data__short-text">Report Text: ${city.shortText}.</p>
        <p class="forecast-data__severity">Severity: ${city.severity}</p>
    </div>
    `;
    elements.forecastDataDiv.insertAdjacentHTML('afterbegin', markup);
}; 