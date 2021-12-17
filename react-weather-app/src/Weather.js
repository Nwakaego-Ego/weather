import React from "react";

export default function Weather () {
    return (
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
                <li>Saturday 23:24</li>
                <li>Partly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                        /> 
                         <span className="degree">87</span> 
                        <span className="farenheit">°F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation : 25%</li>
                        <li>Humidity : 35%</li>
                        <li>Wind: 5 km/h</li>
                    </ul>
                </div>
            </div>
        
        </div>
    )
}