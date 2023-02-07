import axios from 'axios'

const state = () => ({
  capacity: '',
})

const getters = {
  getCapacity(state) {
    return state.capacity
  },
}

const mutations = {
  SET_CAPACITY(state, payload) {
    state.capacity = payload
  },
}

const actions = {
  async fetchCapacity({ commit }) {
    try {
      const response = await axios.get(`${process.env.NUXT_API}api/capacity`,
      {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      const image = response.data.data[0].url
      commit('SET_CAPACITY', image)
    } catch (e) {
      console.error('CANNOT_GET_IMAGE', e)
    }
  },
  async setCapacity({ commit }, payload) {
    try {
      const response = await axios.post(`${process.env.NUXT_API}api/capacity`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          }
        }
      )
      commit('SET_CAPACITY', response.data.data.url)
    } catch (e) {
      console.error(e)
    }
  },
  async deleteCapacity({ commit }, payload) {
    try {
      const response = await axios.delete(`${process.env.NUXT_API}api/FAQ/${payload}`,
        {
          headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
      )
      commit('REMOVE_QUESTION', payload)
    } catch (e) {
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
