import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setcity] = useState('mumbai');

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);
  console.log('weatherData',weatherData);
  const onClick = () =>{//
console.log('onclick');


  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
      <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="cityName">
        Enter a city Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cityName" type="text" placeholder="cityName" />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={onClick}>
  Button
</button>
    </div>
        {weatherData ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">
              Weather in {weatherData.name}, {weatherData.sys.country}
            </h1>
            <p className="text-lg">Temperature: {weatherData.main.temp} °C</p>
            {/* Other weather information can be displayed similarly */}
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
