import React, { useState } from 'react';
import './App.css';
import CitySearch from './CitySearch';
import AirQualityCard from './AirQualityCard';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [airQualityData, setAirQualityData] = useState(null)
  const [error, setError] = useState(null)
  
  // function to call the API:
  const getAirQuality = async function(city) {
    try {
      const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`)
      const data = await response.json()
      console.log(data)
      if (response.ok && data.status === 'ok') {
        // setting data into state:
        setAirQualityData(data.data);
        setError(null);
      } else {
        setError("Sorry, we couldn't find the city you were looking for. Try another location or check the spelling to ensure it is correct")
      }
    } catch (error) {
      console.error("network error:", error)
      setError("Sorry, something went wrong");
      setAirQualityData(null);
    }
  }

  return (
    <div className='container'>
    <h1 className='mt-5 mb-3'>Air Quality Index Finder</h1>
    <CitySearch getAirQuality={getAirQuality} />

    {/* short circuiting: to do if there's a value in error state variable */}
    {error && (
      <div className='alert alert-danger' role='alert'>
        {error}
      </div>
    )}

    {/* short circuiting: to do if there's a value in airQualityData state variable */}
    {airQualityData && (
      <>
        <AirQualityCard data={airQualityData} />
      </>
    )}
    </div>
  );
}

export default App;
