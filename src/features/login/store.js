const state = {
  isUserLoggedIn: false,
  token: '',
  apiKey: ''
}
const getters = {
  getToken: () => this.token,
  getApiKey: () => this.apiKey
}
const actions = {
  setIsUserLoggedIn({ commit }, isLoggedIn) {
    commit('SET_IS_USER_LOGGED_IN', isLoggedIn)
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  setApiKey({ commit }, apiKey) {
    commit('SET_API_KEY', apiKey)
  }
}
const mutations = {
  SET_IS_USER_LOGGED_IN(state, isLoggedIn) {
    state.isUserLoggedIn = isLoggedIn
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_API_KEY(state, apiKey) {
    state.apiKey = apiKey
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
