import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import CountrySearch from './components/CountrySearch';



function App() {
  const [country, setCountry] = useState('');
  const [listCountries, setListCountries] = useState([]);

  const URL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

  useEffect( () => {
    if(country) {
      axios
        .get(URL)
        .then((response) => {
          const filteredCountries = response.data.filter(c => 
            c.name.common.toLowerCase().includes(country.toLowerCase())
          )
          setListCountries(filteredCountries)
        })
        .catch(error => {
          console.log("error fetching data",error)
          setListCountries([])
        })
    } else {
      setListCountries([])
    }
  }, [country] )

  const handleInputChange = (event) => {
    setCountry(event.target.value)
    // console.log(event.target.value)
  }


  return (
    <div>
      <SearchInput value={country} onChange={handleInputChange} />
      <CountrySearch countries={listCountries} country={country} />      
    </div>
  )
}

export default App
