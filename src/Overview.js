import FormattedDate from "./FormattedDate";
import "./Overview.css";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnits from "./TemperatureUnites";

export default function Overview(props) {
  return (
    <div className="Weather-data">
      <div className="row">
        <div className="col-6">
          <div className="overview">
            <h1 className="city"> {props.data.city} </h1>
            <ul className="date-time">
              <li>
                {" "}
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex flex-row mb-3">
            <div className="p-2 weather-condition">
              <WeatherIcon code={props.data.icon} />
            </div>

            <div className="p-2 temperature">
              <TemperatureUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="observations">
            <li>
              Humidity: <span id="humidity"> {props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind-speed"> {props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
