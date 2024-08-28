import React, { useState } from 'react'
import './WeatherDisplay.css'


const WeatherDisplay = (props) => {
  const {weather} = props
  const {temperature, condition, location} = weather

  const [updateWeather, setUpdateWeather] = useState(condition)
  
  const update = () =>{
      setUpdateWeather(prevCondition => prevCondition === 'Sunny' ? 'Rainy' : 'Sunny')
  }

  return (
    <>
        <div className='weather'>
            <p><strong>Temperature : </strong>{temperature}</p>
            <p><strong>Location : </strong>{location}</p>

            <p><strong>Condition : </strong>{updateWeather}</p>
            
            <button onClick={update}>Update</button>
        </div>
        
        

    </>
  )
}

export default WeatherDisplay