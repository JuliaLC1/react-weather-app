import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Overview.css";
export default function Overview(props) {
  const [overview, setOverview] = useState({ ready: false });

  function handleResponse(response) {
    setOverview({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (overview.ready) {
    return (
      <div className="row">
        <div className="col-6">
          <div className="overview">
            <h1 className="city"> {overview.city} </h1>
            <ul className="date-time">
              <li>
                {" "}
                <FormattedDate date={overview.date} />
              </li>
              <li className="text-capitalize">{overview.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=ac49392e9f3cf46d70ceaaac9615d827&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
