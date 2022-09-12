// import logo from "./logo.svg";
import Weather from "./components/Weather";
import WeatherSearch from "./components/WeatherSearch";
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
