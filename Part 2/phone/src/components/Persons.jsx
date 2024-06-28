const Persons = ({persons, handleDelete}) => {
    return(
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number} 
            <button 
              value={person.id} onClick={() => handleDelete(person.id, person.name)}>Delete
            </button>
          </li>
        ))}
      </ul>
    )
  }

export default Persons;