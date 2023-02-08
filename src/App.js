import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [weather, setWeather] = useState({})
  const [city, setCity] = useState("")

  useEffect(() => {
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(i => i.json())
    .then(i => setWeather(i))
  }, [city])

  let fahrenheit;
  
  if(weather.temperature){
   fahrenheit = (weather.temperature.split(' ')[0] * 9 / 5) + 32 + "°F";
  } else {
    fahrenheit = weather.temperature
  }
 

  return (
    <div className="App">
      <h1>Weather App</h1>
      <h3>Enter a city</h3>
        <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
        <button >Search</button>
        <h2>{city}</h2>
        <h3>Temperature: {fahrenheit}</h3>
        <h3>Wind: {weather.wind}</h3>
        <h3>Description: {weather.description}</h3>

    </div>
  );
}


export default App;
