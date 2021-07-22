import store from '../features/login/store'

const defaultInterceptor = axios => {
  axios.interceptors.request.use((config) => {
    const token = store.state.token
    const apiKey = store.state.apiKey
    if(token && apiKey) {
      config.params = {
        token: token,
        key: apiKey
      }
    }
    return config
  }, (error) => {
    console.error("Intercept request error", error)
    return Promise.reject(error)
  })

  return axios
}

export default defaultInterceptor
