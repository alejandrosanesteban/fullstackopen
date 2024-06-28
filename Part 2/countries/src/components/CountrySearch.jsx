import TooMatches from "./TooMatches"
import NoMatches from "./NoMatches"
import CountryList from "./CountryList"
import CountryInfo from "./CountryInfo"
import { useState, useEffect } from "react"


const CountrySearch = ({countries,country}) => {

    const [selectedCountry, setSelectedCountry] = useState(null)

    useEffect(() => {
        setSelectedCountry(null)
    }, [countries])

    const handleShowCountry = (country) => {
        setSelectedCountry(country)
    }

    if (selectedCountry) {
        return <CountryInfo country={selectedCountry} />
    }

    if(countries.length > 10) {
        return <TooMatches />
    } else if (countries.length > 1) {
        return <CountryList countries={countries} onShowCountry={handleShowCountry} />
    } else if (countries.length === 1) {
        return <CountryInfo country={countries[0]} />
    } else if (country) {
        return <NoMatches />
    }
    return null;
} 

export default CountrySearch

