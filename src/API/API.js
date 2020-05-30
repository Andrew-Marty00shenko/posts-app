import * as axios from 'axios'

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://server-expres.herokuapp.com/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

export const authAPI = {
    registration(name, email, password) {
        return instance.post('auth/registration'), { name, email, password }
    }
}
