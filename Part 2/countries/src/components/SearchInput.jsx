const SearchInput = ({value,onChange}) => {
    return(
        <p>find countries: 
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
        </p>
    )
}

export default SearchInput