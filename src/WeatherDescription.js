import React from "react";
import Date from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDescription(props) {
    return (
        <div className="WeatherDescription">
            <h1>{props.data.city}</h1>
        <ul>
            <li>
            <Date date={props.data.date} />
            </li>
            <li className="text-capitalized">
                {props.data.description}
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <div >
                    <WeatherIcon code={props.data.icon} size={52}/>
                
                    <WeatherTemperature celcius={props.data.temperature} />
                    
               </div>
              </div>
            </div>
            <div className="col-6">
                <ul>
                    <li> Humidity: {props.data.humidity} %</li>
                    <li> Wind: {Math.round(props.data.wind)} km/h </li>
                </ul>
            </div>
        </div>

        </div>
    );
}