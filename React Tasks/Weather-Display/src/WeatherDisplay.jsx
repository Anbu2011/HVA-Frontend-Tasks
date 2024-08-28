import React from 'react'
import './WeatherDisplay.css'


const WeatherDisplay = (props) => {
  const {weather, onclickchange} = props
  const {temperature, condition, location} = weather

  

  return (
    <>
        <div className='weather'>
            <p><strong>Temperature : </strong>{temperature}</p>
            <p><strong>Condition : </strong>{condition}</p>
            <p><strong>Location : </strong>{location}</p>
            <button onClick={() => onclickchange(location)}>Update</button>
        </div>
    </>
  )
}

export default WeatherDisplay