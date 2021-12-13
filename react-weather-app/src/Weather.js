import React from "react";

export default function Weather () {
    return (
        <div className="Weather">
            <div className="row">
             <div className="col-9">
                <input type="search" placeholder="Enter city here...."
                className="form-control"/>
             </div>
             <div className="col-3">
                <button className="btn btn-danger">Search</button>
            </div>
         </div>
            <h1>Nigeria</h1>
            <ul>
                <li>Saturday 23:24</li>
                <li>Partly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img 
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                        />  87F
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation : 25%</li>
                        <li>Humidity : 35%</li>
                        <li>Wind: 3 km/h</li>
                    </ul>
                </div>
            </div>
        
        </div>
    )
}