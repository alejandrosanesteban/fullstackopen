const CountryList = ({countries, onShowCountry}) => {
    return (
        <ul>
            {countries.map((country, index) => (
                <li key={index}>{country.name.common}
                <button onClick={() => onShowCountry(country)}>show</button>
                </li>
            ))}
        </ul>
    )
}

export default CountryList