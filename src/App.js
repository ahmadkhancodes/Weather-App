import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const checkWeather = () => {
    if (city != "") {
      var url =
        "http://api.weatherapi.com/v1/current.json?key=90725eceaa184162b3b231920222207&q=" +
        String(city) +
        "&aqi=yes";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }
  };
  return (
    <div>
      <h1 className="mt-5">Check Weather</h1>
      <div className="centered mt-4">
        <div className="w-50">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-primary mb-3 w-50" onClick={checkWeather}>
            Check
          </button>
        </div>
      </div>
      <div className="centered mt-4">
        <div className="w-50 border border-primary">
          <h1>Result</h1>
          {data == null ? (
            ""
          ) : (
            <img src={data.current.condition.icon} alt="Weather" />
          )}
          <div className="d-flex justify-content-around">
            <p>City: {data == null ? "" : data.location.name}</p>
            <p>Country: {data == null ? "" : data.location.country}</p>
            <p>
              Local time:
              {data == null ? "" : data.location.localtime.substring(10)}
            </p>
          </div>
          <div className="d-flex justify-content-around">
            <p>Temperature: {data == null ? "" : data.current.temp_c}*C</p>
            <p>Humidity: {data == null ? "" : data.current.humidity}</p>
            <p>Condition: {data == null ? "" : data.current.condition.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
