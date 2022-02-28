import axios from 'axios'
const domain = 'http://localhost:8800'
const api = `${domain}/api`

export const restConnector = axios.create({
   baseURL: api
})