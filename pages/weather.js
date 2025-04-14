import { useState } from 'react';

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London');
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_API_KEY';  // Replace this with your actual API key
  const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

  const fetchWeather = async () => {
    setError(null); // Reset error state
    try {
      const res = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}`);
      const data = await res.json();

      if (data.error) {
        setError('City not found or invalid.');
        return;
      }

      setWeatherData(data);
    } catch (err) {
      setError('Error fetching data. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Weather Widget</h1>
      <input 
        type="text" 
        value={city}
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
          <p>{weatherData.current.temp_c}°C</p>
          <p>{weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
}
