// import logo from "./logo.svg";
import React from "react";

import WeatherSearch from "./components/WeatherSearch.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherSearch />
      </header>
      <footer>
        <span>
          <a
            href="https://github.com/AnnaKGT/weather-app_2_react"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open-source code
          </a>
        </span>
        <span> by </span>
        <a
          href="https://deluxe-starship-7c78b0.netlify.app/about.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          Anna Kohut
        </a>{" "}
        <span> coding workshop from </span>
        <a
          href="https://www.shecodes.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          SheCodes
        </a>
      </footer>
    </div>
  );
}

export default App;
