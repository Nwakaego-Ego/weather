import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
 
export default function WeatherIcon() {
    return (
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="red"
              size={64}
              animate={true}
            />
    )
}