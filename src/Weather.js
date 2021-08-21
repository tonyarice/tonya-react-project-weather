import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready : false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity
        });

    }

    if (weatherData.ready) {
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
                <h1>{weatherData.city}</h1>
            
                <ul>
                    <li><FormattedDate date={weatherData.date} /></li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="d-flex weather-temperature">
                        <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                        <div className="float-left">
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="units">°F</span>
                        </div>
                   </div>
                    </div>
                    <div className="col-6">
                        <ul>
                        <li>Precipitation: 9%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "16cd6fd99fc921f3bd2763bbd7c2b61b";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";

    }
 
}