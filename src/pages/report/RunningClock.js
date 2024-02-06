import React, { Fragment, useState, useEffect, useRef } from "react";

import {formatUnixTimeToHHMM} from '../../logic/utilities'

import classes from './RunningClock.module.css'

const RunningClock = ({ timezone }) => {
  const [currentTimeSec, setCurrentTimeSec] = useState(0)
  const intervalRef = useRef();
  useEffect(() => {

    const now = new Date()
    const localTimeSec = now.getTime() / 1000
    const timeZoneOFfsetSec = now.getTimezoneOffset()*60 
    const UTCTimeSec = localTimeSec+timeZoneOFfsetSec
    const selectedCityTimeSec = UTCTimeSec + timezone
    setCurrentTimeSec(selectedCityTimeSec)

    intervalRef.current = setInterval(() => {
      setCurrentTimeSec(prevTime => prevTime + 1); // Add 1 second to current time
    }, 1000); // Update every second

    return () => clearInterval(intervalRef.current); // Clean up interval on component unmount
  }, [timezone]);

  return (
    <Fragment>
      <div className={classes.digit}>{formatUnixTimeToHHMM(currentTimeSec).split(':')[0]}</div>
      <div className={classes.digit}>{formatUnixTimeToHHMM(currentTimeSec).split(':')[1]}</div>
    </Fragment>
  )
}

export default RunningClock