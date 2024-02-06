import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import {selectedCitiesActions} from '../../store/selected-cities-slice'
import classes from './SelectedCities.module.css';


const SelectedCities = () => {
  const dispatch = useDispatch()
  const selectedCities = useSelector(state => state.cities.selectedCities)

  const handleClick = (data) => {
    dispatch(selectedCitiesActions.setCurrentCity(data.target.title))
  }

  return (
    <ul className={classes.selectedlist}>
      {selectedCities.map((selectedCity) => (
      <Link
        key={selectedCity.id}
        to="/report"
        title={selectedCity.name}
        onClick={handleClick}
        >{selectedCity.name}
        </Link>
      ))}
    </ul>
  )
}

export default SelectedCities