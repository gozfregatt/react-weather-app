import React from "react";

import classes from './WeatherIcon.module.css';

const WEATHERICON_URL = 'https://openweathermap.org/img/w/'

const WeatherIcon = (props) => {
  const iconSource = WEATHERICON_URL+props.icon+'.png'
  
  return (
    <img className={classes.icon} id="icon" src={iconSource} alt="Weather-icon"/>
  )
}

export default WeatherIcon