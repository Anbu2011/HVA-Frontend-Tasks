import React from 'react'
import './WeatherDisplay.css'


const WeatherDisplay = (props) => {

    const {temperature, condition, location} = props.weather

  return (
    <>
        <div className='weather'>
            <p><strong>Temperature : </strong>{temperature}</p>
            <p><strong>Condition : </strong>{condition}</p>
            <p><strong>Location : </strong>{location}</p>
        </div>
    </>
  )
}

export default WeatherDisplay