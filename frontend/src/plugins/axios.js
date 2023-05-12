import axios from "axios";

export const baseURL = 'https://nportal-api.cyclic.app/'

export const HTTP = axios.create({
    baseURL: baseURL + 'api',
    headers: {
        'Content-Type': 'application/json'
    }
})

HTTP.interceptors.response.use(response => response.data)
