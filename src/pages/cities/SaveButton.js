import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {selectedCitiesActions} from '../../store/selected-cities-slice'

import checkmark from '../../assets/checkmark-icon.svg'
import classes from './SaveButton.module.css'

const SaveButton = ({city}) => {
  const dispatch = useDispatch()
  const cityList = useSelector(state => state.citylist.cityList)

  const handleSelect = () =>{
    const selectedCity = cityList.filter((element) => 
    element.name.toLowerCase() === city.toLowerCase())
    dispatch(selectedCitiesActions.addSelectedCity(selectedCity))
  }

  return (
    <Link to='/' onClick={handleSelect}>
      <img src={checkmark} className={classes.saveicon} alt="add city" />
    </Link>
  ) 
}

export default SaveButton