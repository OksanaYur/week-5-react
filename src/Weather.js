import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import Date from "./Date";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });

function displayWeather(response) {
     
    setWeatherData ({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.main,
            humidity: response.data.main.humidity,
            description: response.data.Weather[0].description,
            date: new Date(response.data.dt * 1000),
            
        });
}

if (weatherData.ready) {
    return (
<div className="Weather">
        <form>
        <div className="row">
            <div className="col-9">
                <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on" />
                </div>
                <div className="col-3">
                    <input 
                    type="submit"
                    value="Search"
                    className="btn btn-primary w-100" />
                </div>
        </div>
        <div className="row">
            <div className="col-6">
           </div>
         </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
            <Date date={weatherData.date} />
            </li>
            <li className="text-capitalized">
                {weatherData.description}
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img 
                src={weatherData.iconUrl}
                alt={weatherData.description} 
                
                />
                <div className="float-left">
                <span className="temperature">
                    {Math.round(weatherData.temperature)}
                    </span>
                <span 
                className="unit">
                    °C
                    </span> 
               </div>
              </div>
            </div>
            <div className="col-6">
                <ul>
                    <li> Humidity: {weatherData.humidity} %</li>
                    <li> Wind: {weatherData.wind} km/h </li>
                </ul>
            </div>
        </div>
    </div>
    );
} else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
 
    return "Loading ...";
    }
}
  