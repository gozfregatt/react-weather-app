import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import CityList from './pages/cities/CityList';
import Report from './pages/report/Report';
import { loadCityData } from './logic/cityDbApi'
import { cityListSliceActions } from './store/city-list-slice';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const cities = loadCityData()
    dispatch(cityListSliceActions.initCityList(cities))
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/cities" element={<CityList/>}/>
          <Route path="/report" element={<Report/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
