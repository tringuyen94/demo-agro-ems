import axios from 'axios'
const domain = 'https://demo-agro-ems-server.herokuapp.com/'
const api = `${domain}/api`

export const restConnector = axios.create({
   baseURL: api
})
