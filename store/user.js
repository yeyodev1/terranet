import axios from 'axios'
const state = () => ({
  user: null,
  error: ''
})

const getters = {
  getUser(state) {
    return state.user
  },
  getError(state) {
    return state.error
  }
}

const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_ERROR_MESSAGE(state) {
    state.error = 'Usuario o Password invalidos'
  },
  CLEAN_ERROR_MESSAGE(state) {
    state.error = ''
  }
}

const actions = {
  async login ({ commit }, payload) {
    try {
      console.log(payload)
      const response = await axios.post(`${process.env.NUXT_API}api/login`, payload)
      console.log(response)
      commit('SET_USER', response.data.data)
    } catch (e) {
      commit('SET_ERROR_MESSAGE')
      setTimeout(() => {
        commit('CLEAN_ERROR_MESSAGE')
      }, 1500);
      console.error(e)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
