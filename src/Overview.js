import React from "react";
import "./Overview.css";
export default function Overview() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="overview">
          <h1 className="city"> London </h1>
          <ul className="date-time">
            <li>Saturday 15:09</li>
            <li>Mostly sunny</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
