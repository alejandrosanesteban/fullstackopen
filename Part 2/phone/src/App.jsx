import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [message, setMessage] = useState(null);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  } 

  const addPerson = (event) => {
    // console.log(event)
    event.preventDefault();
    
    if (newName === '') {
      alert("Name cant be empty");
      return;
    }

    const newObjetName = {
      "name" : newName,
      "number": newNumber
    }

    const nameExists = persons.find(person => person.name === newName);
    if(nameExists) {

      if(window.confirm(`${newName} is already addad to phonebook, Do you want to replace the number`)) {
        personService
        .update(nameExists.id, newObjetName)
        .then(response => {
          setPersons(persons.map(person => person.id !== nameExists.id ? person : response.data));
          setNewName('');
          setNewNumber('');
          showMessage(`${newName}'s number updated`);
        })
        .catch(error => {
          console.log('Error updating', error)
          setMessage('Error trying update')
        })
      }
    } else {
      personService
      .create(newObjetName)
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
        showMessage(`${newName} added to phone`);
      })
      .catch(error => {
        console.log("Error adding", error);
        setMessage('Error adding new person')
        })
    }
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  }

  const filteredPerson = persons.filter(person => 
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {
        console.log("Error fetching data", error)
      })
  }, [])

  const handleDelete = (id,name) => {
    if(window.confirm(`Are you sure you want to delete ${name}`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          showMessage(`${name}'s number has been deleted`, 'error');
        })
        .catch(error => {
          console.log("Error deleting", error);
        })
    }
  }

  const showMessage = (content, type = 'success') => {
    setMessage({content, type});
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter searchName={searchName} handleSearchChange={handleSearchChange}/>
      <h2>Add a new</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
        <Persons persons={filteredPerson} handleDelete={handleDelete}/>
    </div>
  )
}

export default App