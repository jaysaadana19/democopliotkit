// app.js
new Vue({
  el: '#app',
  data: {
    location: '',
    date: '',
    forecast: ''
  },
  methods: {
    async getWeatherForecast() {
      try {
        const response = await fetch(`/weather?location=${this.location}&date=${this.date}`);
        const data = await response.json();
        this.forecast = data;
      } catch (error) {
        console.error('Error fetching weather forecast:', error);
      }
    }
  }
});
