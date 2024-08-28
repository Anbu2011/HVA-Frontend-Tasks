import React, { useState, useEffect } from 'react'
import './WeatherDisplay.css'
import axios from 'axios'

const WeatherDisplay = () => {

  const [location, setLocation] = useState("")
  const [fullLocation, setFullLocation] = useState("")
  const [displayWeather, setDisplayWeather] = useState(null)

  const handleLocationChange = (event) =>{
    setLocation(event.target.value)
  }

  const handleLocationSubmit = () =>{
    setFullLocation(location)
    setLocation("")
  }

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${fullLocation}&appid=7ec993d4f8aec15578e1a6bf1481addc&units=metric`);
      setDisplayWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if(fullLocation){
      getWeatherData();
    }
  }, [fullLocation]); 
  
  return (
    <>  
      
      <div className='user-input'>
        <label htmlFor="location" >Location : </label>
        <input type="text" value={location} onChange={handleLocationChange} placeholder='Enter the Town/City'/>
        <button className="submit-button" onClick={handleLocationSubmit}>Submit</button>
      </div>

      <div className='weather-parent'>
        {displayWeather && (
          <div className='weather'>
            <h2>{displayWeather.name}</h2>
            <p><strong>Temperature : </strong>{displayWeather.main.temp}°C</p>
            <p><strong>Condition : </strong>{displayWeather.weather[0].main}</p>
            <p><strong>Country : </strong>{displayWeather.sys.country}</p>
          </div>
        )}
      </div>
      

    </>
  )
}

export default WeatherDisplay