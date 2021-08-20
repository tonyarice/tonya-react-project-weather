import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
    const {ready, setReady} = useState(false);
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
                </form>
                <h1>Richmond</h1>
            
                <ul>
                    <li>Wednesday 01:00</li>
                    <li>Partly Cloudy</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="d-flex weather-temperature">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Partly Cloudy" className="float-left" />
                        <div className="float-left">
                        <span className="temperature">{temperature}</span>
                        <span className="units">°F</span>
                        </div>
                   </div>
                    </div>
                    <div className="col-6">
                        <ul>
                        <li>Precipitation: 9%</li>
                        <li>Humidity: 97%</li>
                        <li>Wind: 3 mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "16cd6fd99fc921f3bd2763bbd7c2b61b";
        let city = "Paris";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";

    }
 
}