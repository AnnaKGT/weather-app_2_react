import React, { useState } from "react";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";
import TodayDetailsCard from "./TodayDetailsCard";
import Forecast from "./Forecast";

import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [loaded, setLoaded] = useState(null);
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState({});
  const windIcon = (
    <div>
      <i className="fa-solid fa-wind"></i>
    </div>
  );
  const humidityIcon = (
    <div>
      <i className="fa-solid fa-droplet"></i>
    </div>
  );
  const feelsLikeIcon = (
    <div>
      <i className="fa-solid fa-temperature-low"></i>
    </div>
  );

  function getCurrentDay(dateFormat) {
    let date = new Date(dateFormat);
    let currentDate = new Date();
    let time = currentDate.getHours();
    if (time < 10) {
      time = `0${time}`;
    }
    let min = currentDate.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return `${day} ${time}:${min}`;
  }

  function showData(response) {
    setLoaded(true);
    console.log(response.data);
    setWeather({
      cityName: response.data.name,
      temp: Math.round(response.data.main.temp),
      minTemp: Math.round(response.data.main.temp_min),
      maxTemp: Math.round(response.data.main.temp_max),
      feelsLike: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].main,
      date: getCurrentDay(response.data.dt * 1000),
      coord: response.data.coord,
    });
  }

  function SearchingCity(event) {
    event.preventDefault();
    let apiKey = "1fd9d0abbac5edf293ecf453793c7cfa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  function UpDateCity(event) {
    setCity(event.target.value);
  }

  let formSearching = (
    <div className="container mb-4">
      <div className="row ">
        <div className="col-9 weatherSearching__inputForm">
          <form onSubmit={SearchingCity}>
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
                onChange={UpDateCity}
              />
              <button className="btn btn-dark" type="button">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col weatherSearching__inputForm_currentLoc">
          <button className="btn btn-dark" type="button">
            <i className="fa-solid fa-magnifying-glass-location"></i>
          </button>
        </div>
        <div className="col weatherSearching__CF">
          <button className="btn btn-dark" type="button">
            C|F
          </button>
        </div>
      </div>
    </div>
  );

  if (loaded) {
    return (
      <div className="container">
        {formSearching}

        <div className="row">
          <div className="col-7">
            <h6>{weather.date}</h6>
            <h1>{weather.cityName}</h1>
            <p>{weather.description}</p>
          </div>

          <div className="col-5">
            <div className="row">
              <div className="col-6">
                <img src={weather.icon} alt={weather.description} />
              </div>
              <div className="col-6">
                <h2 className="text-end weatherSearch__currentTemp">
                  <span>{weather.temp}</span>
                  <span className="weatherSearch__currentTemp_dimension">
                    °C
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4 weatherSearch__todayDetails">
            <TodayDetailsCard
              name="Wind"
              icon={windIcon}
              numb={weather.wind}
              dimension="m/sec"
            />
          </div>
          <div className="col-4 weatherSearch__todayDetails">
            <TodayDetailsCard
              name="Humidity"
              icon={humidityIcon}
              numb={weather.humidity}
              dimension="%"
            />
          </div>
          <div className="col-4 weatherSearch__todayDetails">
            <TodayDetailsCard
              name="Feels like"
              icon={feelsLikeIcon}
              numb={weather.feelsLike}
              dimension="°C"
            />
          </div>
        </div>

        <hr className="mt-4" />

        <div className="row mt-4">
          <div className="col weatherSearch__forecast">
            <Forecast
              day="Tue"
              minTemp={weather.minTemp}
              maxTemp={weather.maxTemp}
              icon={weather.icon}
            />
          </div>
          <div className="col weatherSearch__forecast">
            <Forecast
              day="Tue"
              minTemp={weather.minTemp}
              maxTemp={weather.maxTemp}
              icon={weather.icon}
            />
          </div>
          <div className="col weatherSearch__forecast">
            <Forecast
              day="Tue"
              minTemp={weather.minTemp}
              maxTemp={weather.maxTemp}
              icon={weather.icon}
            />
          </div>
          <div className="col weatherSearch__forecast">
            <Forecast
              day="Tue"
              minTemp={weather.minTemp}
              maxTemp={weather.maxTemp}
              icon={weather.icon}
            />
          </div>
          <div className="col weatherSearch__forecast">
            <Forecast
              day="Tue"
              minTemp={weather.minTemp}
              maxTemp={weather.maxTemp}
              icon={weather.icon}
            />
          </div>
          <div className="col weatherSearch__forecast">
            <Forecast
              day="Tue"
              minTemp={weather.minTemp}
              maxTemp={weather.maxTemp}
              icon={weather.icon}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {formSearching}

        <div className="waetherSearch__loader">
          <ThreeCircles
            height="100"
            width="100"
            color="rgb(210, 207, 229)"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      </div>
    );
  }
}
