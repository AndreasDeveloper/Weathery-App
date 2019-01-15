// --- IMPORTING MODELS --- \\
import { elements } from './base';
import { formatTime } from './forecastDataView'; // - Functions that is being imported, must be in curly brackets!

// -- EXPORTING FUNCTION | - Rendering Daily Forecast Data on HTML
export const renderDailyForecastData = (dailyData) => {
    const markup = `
    <h2 class="daily-data-heading">&mdash; Weather In Next 5 Days &mdash;</h2>
    <div class="block-1">
        <h2 class="block__date">${formatTime(dailyData.date1)}</h2>
        <h2 class="block__temp">Temperature</h2>
            <h3 class="block__t-max"><i class="icon ion-md-arrow-dropup block__temp-max-icon"></i>${dailyData.tempMax1V} ${dailyData.tempMax1U}</h3>
            <h3 class="block__t-min"><i class="icon ion-md-arrow-dropdown block__temp-min-icon"></i>${dailyData.tempMin1V} ${dailyData.tempMin1U}</h3>
        <h2 class="block__day">Day: ${dailyData.day1}</h2>
        <h2 class="block__night">Night: ${dailyData.night1}</h2>
    </div>
        
    <div class="block-2">
        <h2 class="block__date">${formatTime(dailyData.date2)}</h2>
        <h2 class="block__temp">Temperature</h2>
            <h3 class="block__t-max"><i class="icon ion-md-arrow-dropup block__temp-max-icon"></i>${dailyData.tempMax2V} ${dailyData.tempMax2U}</h3>
            <h3 class="block__t-min"><i class="icon ion-md-arrow-dropdown block__temp-min-icon"></i>${dailyData.tempMin2V} ${dailyData.tempMin2U}</h3>
        <h2 class="block__day">Day: ${dailyData.day2}</h2>
        <h2 class="block__night">Night: ${dailyData.night2}</h2>
    </div>

    <div class="block-3">
        <h2 class="block__date">${formatTime(dailyData.date3)}</h2>
        <h2 class="block__temp">Temperature</h2>
            <h3 class="block__t-max"><i class="icon ion-md-arrow-dropup block__temp-max-icon"></i>${dailyData.tempMax3V} ${dailyData.tempMax3U}</h3>
            <h3 class="block__t-min"><i class="icon ion-md-arrow-dropdown block__temp-min-icon"></i>${dailyData.tempMin3V} ${dailyData.tempMin3U}</h3>
        <h2 class="block__day">Day: ${dailyData.day3}</h2>
        <h2 class="block__night">Night: ${dailyData.night3}</h2>
    </div>

    <div class="block-4">
        <h2 class="block__date">${formatTime(dailyData.date4)}</h2>
        <h2 class="block__temp">Temperature</h2>
            <h3 class="block__t-max"><i class="icon ion-md-arrow-dropup block__temp-max-icon"></i>${dailyData.tempMax4V} ${dailyData.tempMax4U}</h3>
            <h3 class="block__t-min"><i class="icon ion-md-arrow-dropdown block__temp-min-icon"></i>${dailyData.tempMin5V} ${dailyData.tempMin5U}</h3>
        <h2 class="block__day">Day: ${dailyData.day4}</h2>
        <h2 class="block__night">Night: ${dailyData.night4}</h2>
    </div>

    <div class="block-5">
        <h2 class="block__date">${formatTime(dailyData.date5)}</h2>
        <h2 class="block__temp">Temperature</h2>
            <h3 class="block__t-max"><i class="icon ion-md-arrow-dropup block__temp-max-icon"></i>${dailyData.tempMax5V} ${dailyData.tempMax5U}</h3>
            <h3 class="block__t-min"><i class="icon ion-md-arrow-dropdown block__temp-min-icon"></i>${dailyData.tempMin5V} ${dailyData.tempMin5U}</h3>
        <h2 class="block__day">Day: ${dailyData.day5}</h2>
        <h2 class="block__night">Night: ${dailyData.night5}</h2>
    </div>
    `;
    elements.forecastData.insertAdjacentHTML('afterbegin', markup);
}