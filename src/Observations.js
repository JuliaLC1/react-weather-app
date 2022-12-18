import React from "react";
import "./Observations.css";
export default function Observations() {
  return (
    <div className="col-6">
      <ul className="observations">
        <li>
          Humidity: <span id="humidity"> 34</span>%
        </li>
        <li>
          Wind: <span id="wind-speed"> 3</span> km/h
        </li>
      </ul>
    </div>
  );
}
