
const OPENWEATHERMAP_API_KEY = 'c4c658abaed797ae359813df93f0deb4'

const GEOCODE_URL = 'http://api.openweathermap.org/geo/1.0/direct?'

const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'


const getGeocode = async (selectedCity) => {
  const cityParam = `q=${selectedCity}`
  const limitParam= '&limit=1'
  const appidParam= `&appid=${OPENWEATHERMAP_API_KEY}`

  const response = await fetch(GEOCODE_URL+cityParam+limitParam+appidParam, {method:'GET'})
    
    if (!response.ok) {
      throw new Error("Geocode failed...")
    }
    return await response.json()
}
const getWeather = async (lat, lon) => {
  const latParam   = `lat=${lat}`
  const lonParam   = `&lon=${lon}`
  const appidParam = `&appid=${OPENWEATHERMAP_API_KEY}`
  const unitsParam = '&units=metric'

  const response = await fetch(WEATHER_URL+latParam+lonParam+appidParam+unitsParam, {method:'GET'})

  if (!response.ok) {
    throw new Error("Weather fetch failed...")
  }
  return await response.json()
}

export const fetchWeatherData = async (selectedCity, setWeatherDataState) => {
  try {
    const geoData = await getGeocode(selectedCity);

    const weatherData = await getWeather(geoData[0].lat, geoData[0].lon);

    const newData = {
      temp: weatherData.main.temp,
      sunrise: weatherData.sys.sunrise,
      sunset: weatherData.sys.sunset,
      timezone: weatherData.timezone,
      description: weatherData.weather[0].description,
      icon: weatherData.weather[0].icon
    }
    
    setWeatherDataState(newData);

  } catch (error) {
    console.error('Request error:', error);
  }
} 

