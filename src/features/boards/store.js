const state = {
    ready: false,
    test: 'test store is ready'
}
const getters = {
    getReady: () => state.ready
}
const actions = {
    setReady({commit}, ready) {
        commit('SET_READY', ready)
    }
}
const mutations = {
    SET_READY(state, ready) {
        state.ready = ready
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
