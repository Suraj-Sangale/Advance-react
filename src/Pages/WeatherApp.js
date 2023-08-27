import React, { useState, useEffect } from 'react';
import { WRONG_CITY_NAME_MESSAGE } from '../Messages/Messages';
import Button from '../Items/Button';
import InputTextField from '../Items/InputTextField';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setcity] = useState('mumbai');
  const [call, setCall] = useState(null);

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
        alert(WRONG_CITY_NAME_MESSAGE)
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [call]);
  // console.log('weatherData', weatherData);

  const onClick = () => {
    console.log('Entered City is', city);
    setCall(city)

  }

  const handleChangeCity = (e) => {
    let cityName = e.target.value
    setcity(cityName)

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cityName">
            Enter a city Name
          </label>
          <InputTextField city={city} handleChangeCity={handleChangeCity} />
          <Button onClick={onClick} title={'click me'} />
        </div>
        {weatherData ? (
          <>
            <h1 className="text-2xl font-semibold mb-4">
              Weather in {weatherData?.name}, {weatherData?.sys?.country}
            </h1>
            <p className="text-lg">Temperature: {weatherData?.main?.temp} °C</p>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
