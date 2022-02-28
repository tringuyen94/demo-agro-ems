import axios from 'axios'
const domain = 'https://demo-argro-ems.herokuapp.com'
const api = `${domain}/api`

export const restConnector = axios.create({
   baseURL: api
})
