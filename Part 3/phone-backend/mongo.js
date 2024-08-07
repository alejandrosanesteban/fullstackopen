const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://alejandrosanesteban:${encodeURIComponent(password)}@cluster0.w0mfcjo.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB')
        
        const personSchema = new mongoose.Schema({
            name: String,
            number: String,
        })

        const Person = mongoose.model('Person', personSchema)

        if (process.argv.length === 3) {

            Person.find({}).then(result => {
                console.log('Phonebook:')
                result.forEach(person => {
                    console.log(`${person.name} ${person.number}`)
                })
                mongoose.connection.close()
            })
        } else if (process.argv.length === 5) {

            const person = new Person({
                name: process.argv[3],
                number: process.argv[4]
            })

            person.save().then(result => {
                console.log(`Added ${result.name} number ${result.number} to phonebook`)
                mongoose.connection.close()
            })
        } else {
            console.log('Incorrect usage. Use: node mongo.js <password> [name] [number]')
            mongoose.connection.close()
        }
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message)
        process.exit(1)
    })