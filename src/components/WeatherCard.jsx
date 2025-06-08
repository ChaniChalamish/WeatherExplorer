import CurrentWeather from "./CurrentWeather";
import { cities, weatherCodes } from "../constants";
import { useEffect, useState } from "react";
import NoResultsDiv from "./NoResultsDiv";
const WeatherCard = (props) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hasNoResults, setHasNoResults] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  // Fetches weather details based on the API URL
  const getWeatherDetails = async (API_URL) => {
    setHasNoResults(false);
    try {
      const response = await fetch();
      if (!response.ok) throw new Error();
       setHasNoResults(false);  
      const data = await response.json();
      const name = data.name;
      const temperature = Math.floor(data.main.temp);
      const description = data.weather[0].description;
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.weather[0].id)
      );
      const feels_like = Math.floor(data.main.feels_like);
      const humidity = data.main.humidity;
      setCurrentWeather({
        name,
        temperature,
        description,
        weatherIcon,
        feels_like,
        humidity,
      });
       setHasNoResults(false);
    } catch {
      // Set setHasNoResults state if there's an error
      setHasNoResults(true);
    }
  };
  useEffect(() => {
    const defaultCity = props.city;

    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&units=metric&lang=HE&id=524901&appid=${API_KEY}`;
    getWeatherDetails(API_URL);
  }, [cities]);
  return (
    <>
      <div className="container">
        {/* Conditionally render based on hasNoResults state */}
        {hasNoResults == false ? (
          <div className="weather-section">
            {/* Current weather */}

            <CurrentWeather currentWeather={currentWeather} />
          </div>
        ) : (
          <NoResultsDiv />
        )}
      </div>
    </>
  );
};
export default WeatherCard;
