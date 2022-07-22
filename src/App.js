import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const onClickFunc = () => {
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
          <button className="btn btn-primary mb-3 w-50" onClick={onClickFunc}>
            Check
          </button>
        </div>
      </div>
      <div className="centered mt-4">
        <div className="bg-dark w-50">
          <h1>Result</h1>
          <p>City: {data === [] ? "" : data.location.name}</p>
          <p>Country: {data === [] ? "" : data.location.country}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
