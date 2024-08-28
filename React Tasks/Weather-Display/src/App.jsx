import './App.css'
import WeatherDisplay from './WeatherDisplay'

function App() {
  
  const weatherArray = [
    {temperature: '72°C', condition: 'Sunny', location: 'Los Angeles, CA'},
    {temperature: '65°C', condition: 'Sunny', location: 'San Francisco, CA'},
    {temperature: '50°C', condition: 'Rainy', location: 'Seattle, WA'},
    {temperature: '85°C', condition: 'Sunny', location: 'Phoenix, AZ'},
    {temperature: '30°C', condition: 'Rainy', location: 'Denver, CO'}

  ]

  

  return (
    <>
      <h1>Weather Display</h1>
      <div>
        {weatherArray.map((elements) => (
          <WeatherDisplay weather={elements} />
        ))}
      </div>
      
      
    </>
  )
}

export default App
