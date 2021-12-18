import React, { useState } from "react";
import axios from "axios";
import FriendlyDate from "./FriendlyDate"

export default function Weather () {
    const [loaded, setLoaded] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    
    function handleWeather(response) {
        console.log (response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            
        });
        setLoaded(true);
    }

   
    
    if (loaded) {
        return  (
            <div className="Weather">
                <div className="row">
                 <div className="col-9">
                    <input type="search" placeholder="Enter city here...."
                    className="form-control p-2" autoFocus="on"/>
                 </div>
                 <div className="col-3">
                    <button className="btn btn-danger w-100 p-2">Search</button>
                </div>
             </div>
                <h1>Nigeria</h1>
                <ul className="date">
                    <li><FriendlyDate date={weatherData.date} /></li>
                    <li>{weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img 
                            src={weatherData.iconUrl}
                           alt={weatherData.description} /> 
                             <span className="degree">{Math.round(weatherData.temperature)}</span> 
                            <span className="farenheit">°F</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation : 25%</li>
                            <li>Humidity : {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            
            </div>
        ); 
    } else {
        let apiKey = "bea8e5cfc09f2c80726c878f5fd81290";
        let city = "Nigeria";
        let apiUrl =  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      
        axios.get(apiUrl).then(handleWeather);

        return "loading....."
    }
    
   
}