const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <h2 className="name">{currentWeather.name}</h2>
      <img
        src={`/icons/${currentWeather.weatherIcon}.svg`}
        className="weather-icon"
        alt={`icon-${currentWeather.weatherIcon}`}
      />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
      <div className="data-grid">
        <div className="data-item">
          <p>טמפר' מורגשת</p>
          <p>
            {currentWeather.feels_like}
            <span>°C</span>
          </p>
        </div>
        <div className="data-item">
          <p>לחות</p>
          <p>
            {currentWeather.humidity}
            <span>%</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
