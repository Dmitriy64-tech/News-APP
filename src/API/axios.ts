import axios from 'axios'

export const axiosInstance = axios.create(
    {
        withCredentials: true,
        baseURL: ' https://newsapi.org/v2',
        headers: { "API-KEY": "2bec922d15c94bb3b845024e5e5df4bf" }
    }
);