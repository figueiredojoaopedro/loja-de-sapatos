

import axios from 'axios';

const api = axios.create({
    baseURL: "http://127.0.0.1:3001/",
    headers: {}
})

// exporting
export default api;