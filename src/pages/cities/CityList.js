import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import AutoComplete from './AutoComplete';
import SaveButton from './SaveButton';

import backIcon from '../../assets/back-icon.svg'

const Cities = () => {
  const [selectedCity, setSelectedCity] = useState('')
  
  const handleSelected = (selected) =>{
    setSelectedCity(selected)
  }

  return (
    <div className='wrapper'>
      <Link to="/">
        <img src={backIcon} className="back-arrow" alt="back" />
      </Link>
      <AutoComplete onSelected={handleSelected}/>
      {selectedCity && 
      <SaveButton city={selectedCity}/>
      }
    </div>
  )
}

export default Cities