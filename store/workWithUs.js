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
      const response = await axios.post(
        `${process.env.NUXT_API}api/cvFile`,
        payload
      )
      commit('SET_LOADING', false)
      return response.data
    } catch (e) {
      console.error('CANNOT_SEND_CV', e)
    }
  },
  async postApplication({ commit }, payload) {
    try {
      await axios.post(
        `${process.env.NUXT_API}api/workWUs`,
        payload
      )
    } catch (error) {
      console.error('CANNOT_SEND_CV')
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
