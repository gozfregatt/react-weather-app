import React from 'react';

import AddButton from './AddButton';
import SelectedCities from './SelectedCities';

const Home = () => {
  return (
    <div className='wrapper'>
      <SelectedCities/>
      <AddButton/>
    </div>
  )
}

export default Home