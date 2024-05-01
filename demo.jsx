import React, { useState } from 'react';
import axios from 'axios';

function WeatherForecastApp() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [forecast, setForecast] = useState('');

  const getWeatherForecast = async () => {
    try {
      const response = await axios.get(`/weather?location=${location}&date=${date}`);
      setForecast(response.data);
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={getWeatherForecast}>Get Forecast</button>
      <div>{forecast}</div>
    </div>
  );
}

export default WeatherForecastApp;
