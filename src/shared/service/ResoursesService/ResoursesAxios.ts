import axios from 'axios'

import { apiPath } from '../../constants/var'

const api = axios.create({
  baseURL: apiPath.base,
  headers: {
    'X-API-KEY': import.meta.env.VITE_TOKEN_API
  }
})

export default api
