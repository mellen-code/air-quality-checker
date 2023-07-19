import React, { useState } from 'react';

const CitySearch = ({getAirQuality}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
        // prevent page refresh
        e.preventDefault();

        const formattedCity = inputValue.replace(/ /g, '-')
        getAirQuality(formattedCity)
    }

    return (
        <form onSubmit={handleSearch} className='mb-4'>
            <input type="text" placeholder="Enter city here" onChange={handleInputChange} className='form-control'></input>
            <button type="submit" className='btn btn-primary mt-3'>Search</button>
        </form>
    )
}

export default CitySearch