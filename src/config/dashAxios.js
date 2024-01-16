import axios from 'axios';


export const axiosDash = axios.create({
    baseURL: 'http://localhost:3030/api',
    timeout: 120000,
    headers: {
        "Content-Type": 'application/json',
    }
});