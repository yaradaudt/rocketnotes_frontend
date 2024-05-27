import axios from "axios"

export const api = axios.create({
    baseURL:"https://rocketnotes-backend-k4gk.onrender.com"
})