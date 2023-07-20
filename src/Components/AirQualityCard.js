
const getCardColor = (aqi) => {
    if (aqi <= 50) {return 'bg-success text-white'}
    else if (aqi <= 100) {return 'bg-warning'}
    else if (aqi <= 150) {return 'bg-orange'}
    else if (aqi <= 200) {return 'bg-danger text-white'}
    else if (aqi <= 300) {return 'bg-very-unhealthy text-white'}
    else if (aqi > 300) {return 'bg-hazardous'}
    else {return 'bg-white'}
}

const getHealthConcern = (aqi) => {
    if (aqi <= 50) {return 'Good'}
    else if (aqi <= 100) {return 'Moderate'}
    else if (aqi <= 150) {return 'Unhealthy for Sensitive Groups'}
    else if (aqi <= 200) {return 'Unhealthy'}
    else if (aqi <= 300) {return 'Very Unhealthy'}
    else if (aqi > 300) {return 'Hazardous'}
    else {return 'not available'}
}

const AirQualityCard = ({data}) => {
    // destructing the data object:
    const {aqi, city, dominentpol, time} = data
    const cardBackgroundColor = getCardColor(aqi)
    const healthConcern = getHealthConcern(aqi)

    return (
        <div className={`card mb-4 ${cardBackgroundColor}`}>
            <div className='card-body'>
                <h5 className='card-title'>{city.name}</h5>
                <h6 className='card-subtitle mb-2'>Air Quality Index: {aqi}</h6>
                <p className='card-text'>Level of Health Concern: {healthConcern}</p>
                <p className='card-text'>Dominant Pollutant: {dominentpol}</p>
                <p className='card-text'>Last Updated: {time.s}</p>
            </div>
        </div>
    )
}

export default AirQualityCard