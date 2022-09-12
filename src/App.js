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
    </div>
  );
}

export default App;
