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
  async sendBankImage({ commit }, payload) {
    try {
      commit('SET_LOADING', true)
      const response = await axios.post(
        `${process.env.NUXT_BANK_IMAGE}api/bankimage`,
        payload
      )
      commit('SET_LOADING', false)
      return response.data
    } catch (e) {
      console.error('CANNOT_RECEIVE_BANK_IMAGE', e)
    }
  },
  async postBankImage({ commit }, payload) {
    try {
      await axios.post(`${process.env.NUXT_BANK_IMAGE_URL}api/banks`)
    } catch (error) {
      console.error('CANNOT_SEND_BANK_IMAGE', error)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
