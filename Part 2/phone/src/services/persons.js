import axios from 'axios'
const URL = '/api/persons/'

const getAll = () => {
    return axios.get(URL)
}

const create = newObjetName => {
    return axios.post(URL, newObjetName)
}

const remove = id => {
    return axios.delete(`${URL}${id}`)
}

const update = (id, newObjetName) => {
    return axios.put(`${URL}${id}`, newObjetName)
}

export default {getAll, create, remove, update}