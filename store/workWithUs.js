import axios from 'axios'

const state = () => ({
  isLoading: false,
})

const getters = {
  isLoading(state) {
    return state.isLoading
  },
}

const mutations = {
  SET_LOADING(state, payload) {
    state.isLoading = payload
  },
}

const actions = {
  async sendCv({ commit }, payload) {
    try {
      commit('SET_LOADING', true)
      console.log(payload)
      // await axios.post(`${process.env.NUXT_API}api/cvFile`, payload)
      commit('SET_LOADING', false)
    } catch (e) {
      console.error('CANNOT_SEND_CV', e)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
