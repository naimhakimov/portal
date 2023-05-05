import axios from "axios";

export const baseURL = 'http://localhost:3000/'

export const HTTP = axios.create({
    baseURL: baseURL + 'api',
    headers: {
        'Content-Type': 'application/json'
    }
})

HTTP.interceptors.response.use(response => response.data)