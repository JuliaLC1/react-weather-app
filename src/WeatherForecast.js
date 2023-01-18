import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="clear-sky-day" size={36} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">10°</span>
            <span className="WeatherForecast-temp-min"> 2°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
