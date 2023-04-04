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
        `${process.env.NUXT_BANK_IMAGE}`,
        payload,
        {
          headers: {
            Authorization: `bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      commit('SET_LOADING', false)
      return response.data
    } catch (e) {
      console.error('CANNOT_RECEIVE_BANK_IMAGE', e)
    }
  },
  async postBankImage({ commit }, payload) {
    console.log(payload)
    try {
      commit('SET_LOADING', true)
      const formData = new FormData()
      formData.append('image', payload)
      const response = await axios.post(
        `${process.env.NUXT_BANK_IMAGE}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'multipart/form-data',
          },
        }
      )
      commit('SET_LOADING', false)
      return response.data
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
