import React from "react";
import axios from "axios";

export default function Weather() {
  function showData(response) {
    alert(`The weather in ${city} is ${response.data.weather[0].description}`);
  }

  let city = "Lisbon";
  let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showData);

  return (
    <div>
      <h2>Weather App version 2.0</h2>
    </div>
  );
}
