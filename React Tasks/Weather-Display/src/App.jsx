import './App.css'
import WeatherDisplay from './WeatherDisplay'

function App() {
  
  const weatherArray = [
    {temperature: '72°C', condition: 'Sunny', location: 'Los Angeles, CA'},
    {temperature: '65°C', condition: 'Cloudy', location: 'San Francisco, CA'},
    {temperature: '50°C', condition: 'Rainy', location: 'Seattle, WA'},
    {temperature: '85°C', condition: 'Hot', location: 'Phoenix, AZ'},
    {temperature: '30°C', condition: 'Snowy', location: 'Denver, CO'}

  ]

  const update = (location) => {  
    alert(`Weather update requested for ${location}`)
  }

  return (
    <>
      <h1>Weather Display</h1>
      <div>
        {weatherArray.map((elements) => (
          <WeatherDisplay weather={elements} onclickchange={update} />
        ))}
      </div>
      
      
    </>
  )
}

export default App
