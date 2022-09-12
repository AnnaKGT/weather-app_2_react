import React from "react";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="forecast">
      <div className="forecast-day">{props.day}</div>
      <img src={props.icon} alt="weather" />
      <div>
        {props.maxTemp}/<span className="text-muted">{props.minTemp}</span>
      </div>
    </div>
  );
}
