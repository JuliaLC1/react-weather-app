import React from "react";

export default function TemperatureUnits(props) {
  return (
    <div className="temp-info">
      <strong id="temp-number">{Math.round(props.celsius)}</strong>
      <span className="units">°C</span>
    </div>
  );
}
