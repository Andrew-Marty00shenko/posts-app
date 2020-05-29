import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://server-expres.herokuapp.com/',
    headers: {
        // "API-KEY": "4e31a0ed-9880-4ca3-ae59-5ae67644162b"
    }
})

