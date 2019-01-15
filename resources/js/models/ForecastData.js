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
            this.data = res.data.DailyForecasts;
            this.headData = res.data.Headline;
            this.date = this.data[0].Date;
            this.dayIp = this.data[0].Day.IconPhrase;
            this.nightIp = this.data[0].Night.IconPhrase;
            this.tempMinU = this.data[0].Temperature.Minimum.Unit;
            this.tempMinV = this.data[0].Temperature.Minimum.Value;
            this.tempMaxU = this.data[0].Temperature.Maximum.Unit;
            this.tempMaxV = this.data[0].Temperature.Maximum.Value;
            this.category = this.headData.Category; // Rain, Snow, Clouds..
            this.severity = this.headData.Severity; // Severity of the category (integers)
            this.shortText = this.headData.Text; // Short text describing the weather

            // - Current Conditions - \\
            const res2 = await axios(`http://dataservice.accuweather.com/currentconditions/v1/${this.id}?apikey=${apiKey}`);
            this.data2 = res2.data[0];
            this.currTempU = this.data2.Temperature.Metric.Unit;
            this.currTempV = this.data2.Temperature.Metric.Value;
        } catch (error) {
            console.log(error);
        }
    }
}