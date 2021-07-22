import Axios from 'axios'
import interceptor from '../config/DefaultInterceptor'

class BaseBackend {
  constructor() {
    this.axios = interceptor(
      Axios.create({
        baseURL: 'https://api.trello.com'
      })
    )
  }

  delete(url, data, config) {
    return this.axios({
      method: 'DELETE',
      url,
      data,
      ...config
    })
  }

  get(url, params, config) {
    return this.axios({
      method: 'GET',
      url,
      params,
      ...config
    })
  }

  post(url, data, config) {
    return this.axios({
      method: 'POST',
      url,
      data,
      ...config
    })
  }

  put(url, data, config) {
    return this.axios({
      method: 'PUT',
      url,
      data,
      ...config
    })
  }
}

export default BaseBackend
