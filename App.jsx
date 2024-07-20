import React, { useState } from 'react';
import Axios from 'axios';
const KEY = '9dada6e8da7bab4b73b9baf9cc610711';
const App = () => {
  const [city, setCity] = useState(initialCity);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await Axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}');
      setData(response.data);
      console.log(response.data); 
    } catch (err) {
      alert('Error in API call');
    }
  };

  return (
    <div className='App'>
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input
          type="text"
          className="input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button onClick={fetchData}>Fetch</button>
      {data && (
        <div className='weather-data'>
          <h2>{data.name}</h2>
          <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
