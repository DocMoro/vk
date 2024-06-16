import axios from 'axios'

import { apiPath, TOKEN_API } from '../../constants/var'

const api = axios.create({
  baseURL: apiPath.base,
  headers: {
    'X-API-KEY': TOKEN_API
  }
})

export default api
