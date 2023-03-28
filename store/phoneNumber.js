import axios from 'axios'

const state = () => ({
  phoneNumber: '',
})

const getters = {
  getNumber(state) {
    return state.phoneNumber
  },
}

const mutations = {
  SET_PHONENUMBER(state, payload) {
    state.phoneNumber = payload
  },
}

const actions = {
  async sendPhoneNumber({ commit }, payload) {
    try {
      const response = await axios.post(
        `${process.env.NUXT_API}api/phoneNumber`,
        payload
      )
      const phoneNumber = response.data.data.phoneNumber
      commit('SET_PHONENUMBER', phoneNumber)
    } catch (errror) {
      console.error(error)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
