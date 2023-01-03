import React, { useState } from "react";
import axios from "axios";

import "./Temperature.css";
export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-6">
          <div className="d-flex flex-row mb-3">
            <div className="p-2 weather-condition">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                id="icon"
              />
            </div>
            <div className="p-2 temperature">
              <strong id="temp-number">
                {Math.round(weatherData.temperature)}
              </strong>
              <span className="units">
                <a href="/">°C | °F </a>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="observations">
            <li>
              Humidity: <span id="humidity"> {weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind-speed"> {weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=ac49392e9f3cf46d70ceaaac9615d827&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
