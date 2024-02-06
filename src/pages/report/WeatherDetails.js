import React from "react";

import {formatUnixTimeToHHMM} from '../../logic/utilities'

import thermoIcon from '../../assets/thermo-icon.svg'
import sunriseIcon from '../../assets/sunrise-icon.svg'
import sunsetIcon from '../../assets/sunset-icon.svg'

import classes from './WeatherDetails.module.css'

const WeatherDetails = (props) => {

  const intTemp = Math.round(props.temp)
  const sunriseTime = formatUnixTimeToHHMM(props.sunrise)
  const sunsetTime = formatUnixTimeToHHMM(props.sunset)


  return (
    <div className={classes.container}>
      <div className={classes.row}>
      <img src={thermoIcon} className={classes.icons} alt="thermometer icon"/>
      <div className={classes.text}>{intTemp} °C</div>
      </div>
      <div className={classes.row}>
      <img src={sunriseIcon} className={classes.icons} alt="sunrise icon"/>
      <div className={classes.text}>{sunriseTime}</div>
      </div>
      <div className={classes.row}>
      <img src={sunsetIcon} className={classes.icons} alt="sunset icon"/>
      <div className={classes.text}>{sunsetTime}</div>
      </div>        
    </div>
    )
}

export default WeatherDetails