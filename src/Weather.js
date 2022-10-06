import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1>Uzhhorod</h1>
        <ul>
            <li>
                Thursday, 10:00
            </li>
            <li>
                Sunny
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img 
                src="https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png"
                alt="Sunny weather" 
                />
                
                <span className="temperature">6</span>
                <span className="unit">°C</span> 
                
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Percipitation: 15%
                    </li>
                    <li>
                        Humidity: 72%
                    </li>
                    <li>
                        Wind: 13 km/h
                    </li>
                </ul>
            </div>
        </div>
    
        </div>
    );
    }
  