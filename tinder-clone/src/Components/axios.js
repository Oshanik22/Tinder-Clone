import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-oshanik22.herokuapp.com/'
})

export default instance;