import axios from 'axios'

const state = () => ({
  isLoading: false,
  speed: {}
})

const getters = {
  isLoading(state) {
    return state.isLoading
  },
  getSpeed(state) {
    return state.speed
  }
}

const mutations = {
  SET_LOADING(state, payload) {
    state.isLoading = payload
  },
  SET_SPEED(state, payload) {
    state.speed = payload
  }
}

const actions = {
  async testNetwork({ commit }, payload) {
    try {
      commit('SET_LOADING', true)
      const response = await axios.post(`${process.env.NUXT_API}api/timeTest`, payload)
      commit('SET_SPEED', response.data)
      commit('SET_LOADING', false)
    } catch (e) {
      console.error('CANNOT_GET_NETWORK_SPEED', e)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
