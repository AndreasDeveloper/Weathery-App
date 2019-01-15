// * --- IMPORTING FILES --- * \\
import axios from 'axios';
import { apiKey } from '../config.js';

export default class DailyForecast {
    constructor(id) {
        this.id = id;
    }
    // Making AJAX Call
    async getDailyForecastData() {
        try {
            const res2 = await axios(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${this.id}?apikey=${apiKey}&details=false&metric=true`);
            this.data = res2.data.DailyForecasts;
            // Dates
            this.date1 = this.data[0].Date;
            this.date2 = this.data[1].Date;
            this.date3 = this.data[2].Date;
            this.date4 = this.data[3].Date;
            this.date5 = this.data[4].Date;
            // Temperature Maximum
            this.tempMax1V = this.data[0].Temperature.Maximum.Value;
            this.tempMax1U = this.data[0].Temperature.Maximum.Unit;
            this.tempMax2V = this.data[1].Temperature.Maximum.Value;
            this.tempMax2U = this.data[1].Temperature.Maximum.Unit;
            this.tempMax3V = this.data[2].Temperature.Maximum.Value;
            this.tempMax3U = this.data[2].Temperature.Maximum.Unit;
            this.tempMax4V = this.data[3].Temperature.Maximum.Value;
            this.tempMax4U = this.data[3].Temperature.Maximum.Unit;
            this.tempMax5V = this.data[4].Temperature.Maximum.Value;
            this.tempMax5U = this.data[4].Temperature.Maximum.Unit;
            // Temperature Minimum
            this.tempMin1V = this.data[0].Temperature.Minimum.Value;
            this.tempMin1U = this.data[0].Temperature.Minimum.Unit;
            this.tempMin2V = this.data[1].Temperature.Minimum.Value;
            this.tempMin2U = this.data[1].Temperature.Minimum.Unit;
            this.tempMin3V = this.data[2].Temperature.Minimum.Value;
            this.tempMin3U = this.data[2].Temperature.Minimum.Unit;
            this.tempMin4V = this.data[3].Temperature.Minimum.Value;
            this.tempMin4U = this.data[3].Temperature.Minimum.Unit;
            this.tempMin5V = this.data[4].Temperature.Minimum.Value;
            this.tempMin5U = this.data[4].Temperature.Minimum.Unit;
            // Day Status
            this.day1 = this.data[0].Day.IconPhrase;
            this.day2 = this.data[1].Day.IconPhrase;
            this.day3 = this.data[2].Day.IconPhrase;
            this.day4 = this.data[3].Day.IconPhrase;
            this.day5 = this.data[4].Day.IconPhrase;
            // Night Status
            this.night1 = this.data[0].Night.IconPhrase;
            this.night2 = this.data[1].Night.IconPhrase;
            this.night3 = this.data[2].Night.IconPhrase;
            this.night4 = this.data[3].Night.IconPhrase;
            this.night5 = this.data[4].Night.IconPhrase;
        } catch (error) {
            console.log(error);
        }
    }
}