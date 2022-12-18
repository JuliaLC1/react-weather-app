import React from "react";
import "./Temperature.css";
export default function Temperature() {
  return (
    <div className="col-6">
      <div>
        <div className="d-flex flex-row mb-3">
          <div className="p-2 weather-condition">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
              id="icon"
            />
          </div>
          <div className="p-2 temperature">
            <strong id="temp-number">15</strong>
            <span className="units">
              <a href="/">°C | °F </a>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
