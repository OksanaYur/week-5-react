import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDescription from "./WeatherDescription";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

function displayWeather(response) {  
    setWeatherData ({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            icon: response.data.weather[0].icon,
        });
}

function handleSubmit(event) {
event.preventDefault();
search();

}

function handleCityChange(event) {
setCity(event.target.value);
}

function search() {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
}

if (weatherData.ready) {
    return (
<div className="Weather">
        <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-9">
                <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on" 
                onChange={handleCityChange} 
                />
            </div>
                <div className="col-3">
                    <input 
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100" 
                    />
                </div>
        </div>
        </form>
        <WeatherDescription data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
         </div>
    );
} else {
    search();
    return "Loading ...";
    }
}
  