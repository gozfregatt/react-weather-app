import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/back-icon.svg'
import RunningClock from './RunningClock';
import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';
import { fetchWeatherData } from '../../logic/weatherApi';

import classes from './Report.module.css';

const Report = () =>  {
  const selectedCity = useSelector(state => state.cities.currentCity)
  const [weatherDataState, setWeatherDataState] = useState(null);

  useEffect(() => {
    if (!weatherDataState) {
      fetchWeatherData(selectedCity, setWeatherDataState)
    }
  }, [selectedCity, weatherDataState])


  return (
    <div className='wrapper'>
      <Link to="/">
        <img src={backIcon} className="back-arrow" alt="back" />
      </Link>
      {weatherDataState &&
      <Fragment>
        <RunningClock timezone={weatherDataState.timezone}/>
        <div className={classes.cityname}>{selectedCity}</div>
        <WeatherIcon icon={weatherDataState.icon}/>
        <div className={classes.description}>{weatherDataState.description}</div>
        <WeatherDetails temp={weatherDataState.temp} sunrise={weatherDataState.sunrise} sunset={weatherDataState.sunset}/>
      </Fragment>
      }
    </div>
  )
}

export default Report