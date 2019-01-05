// * --- IMPORTING FILES --- * \\
import axios from 'axios';
import { apiKey } from '../config.js';

export default class ForecastData {
    constructor(id) {
        this.id = id;
    }
    // Making AJAX Call
    async getForecastData() {
        try {
            const res = await axios(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${this.id}?apikey=${apiKey}&metric=true`);
            console.log(res);
            this.data = res.data.DailyForecasts;
            // Accesing Array
            this.data.forEach(el => {
                el.Date; // Forecast showing date
                el.Day.IconPhrase; // Status for Day: Rain, Clouds, Snow..
                el.Night.IconPhrase; // Status for Night: Rain, Clouds, Snow..
                el.Temperature.Minimum.Unit; // C/F
                el.Temperature.Minimum.Value; // 27, 16, -5, 0..
                el.Temperature.Maximum.Unit;
                el.Temperature.Maximum.Value;
            })
            this.category = res.data.Headline.Category; // Rain, Snow, Clouds..
            this.severity = res.data.Headline.Severity; // Severity of the category (integers)
            this.shortText = res.data.Headline.Text; // Short text describing the weather
            console.log(this.date);
        } catch (error) {
            console.log(error);
        }
    }
}