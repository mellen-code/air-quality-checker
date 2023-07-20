

const AirQualityLevelsTable = () => {
    const levels = [
        { range: '0 - 50', level: 'Good'},
        { range: '51 - 100', level: 'Moderate'},
        { range: '101 - 150', level: 'Unhealthy for Sensitive Groups'},
        { range: '151 - 200', level: 'Unhealthy'},
        { range: '201 - 300', level: 'Very Unhealthy'},
        { range: '301 and higher', level: 'Hazardous'},
    ]

    return (
        <div className='card mb-4'>
            <div className='card-body'>
                <h5 className='card-title'>
                Air Quality Levels:
                </h5>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope='column'>AQI Range</th>
                            <th scope='column'>Level of Health Concern</th>
                        </tr>
                    </thead>
                    <tbody>
                {/* using the array's index as key value because the table is static */}
                        {levels.map(({range, level}, index) => (
                            <tr key={index}>
                                <td>{range}</td>
                                <td>{level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AirQualityLevelsTable