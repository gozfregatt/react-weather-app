import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './AutoComplete.module.css'

const MAX_SUGGESTIONS = 8

const AutoComplete = (props) => {
  const selectedCities = useSelector(state => state.cities.selectedCities)
  const cityList = useSelector(state => state.citylist.cityList)
  
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value)

    if (value.length > 1) {
      const filteredCities = cityList.filter(city =>
        city.name.toLowerCase().includes(value.toLowerCase()) &&
        !selectedCities.some(selectedCity => selectedCity.name === city.name)
      )
      setSuggestions(filteredCities.slice(0, MAX_SUGGESTIONS))
    } else {
      setSuggestions([])
    }
    props.onSelected('')

  };

  const handleSuggestionClick = (cityname) => {
    setInputValue(cityname);
    props.onSelected(cityname)
    setSuggestions([]);
  };

  return (
    <div className={classes.wrapper}>
      <input className={classes.inputfield}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a city name"
      />
      <ul className={classes.citylist}>
        {suggestions.map((city, index) => (
          <li className={classes.items} key={index} onClick={() => handleSuggestionClick(city.name)}>
            {city.name.split(new RegExp(`(${inputValue})`, 'i')).map((part, i) => 
              part.toLowerCase() === inputValue.toLowerCase() 
                ? <span key={i} className={classes.match}>{part}</span>
                : part
            )}          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;