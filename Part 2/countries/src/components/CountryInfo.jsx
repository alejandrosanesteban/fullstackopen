import axios from 'axios'
import { useState, useEffect } from 'react';

const WEATHER_APIKEY = '3a281d6236b0f9fd5cb34f5c57f600c9';

const GeneralData = ({name,capital,area}) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <p>Capital: {capital}</p>
        <p>Area: {`${area}km2`}</p>
      </div>
    </div>
  )
}

const Languages = ( {languages} ) => {
  return (
    <div>
      <h3>Languages</h3>
      <ul>
        {Object.values(languages).map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>
    </div>
  )
}

const Flag = ({flag}) => {
  return (
    <img src={flag}></img>
  )
}

const Weather = ( {capital, temp, icon, wind} ) => {
  return (
      <div>
        <h2>Weather in {capital}</h2>
        <p>Temperature: {temp}</p>
        <img src={icon}></img>
        <p>Wind: {wind}m/s</p>
      </div>
  )
}

const CountryInfo = ({country}) => {
    console.log(country)
    const [weather, setWeather] = useState(null)

    useEffect(() => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${WEATHER_APIKEY}`)
        .then((response) => {
          setWeather(response.data)
        })
        .catch((error) => {
          console.log("Error fetching weather", error)
        })
    
    }, [country.capital])

    return (
      <div>
        
        <GeneralData 
          name={country.name.common} 
          capital={country.capital} 
          area={country.area} 
        />
        <Languages languages={country.languages} />
        <Flag flag={country.flags.png} />
        {weather && (
          <Weather 
            capital={country.capital} 
            temp={weather.main.temp}
            icon={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            wind={weather.wind.speed}  
          />
        )}
      </div>
    );
  };

export default CountryInfo