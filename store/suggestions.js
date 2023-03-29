import axios from 'axios'

const state = () => ({
  suggetions: [],
})

const getters = {
  getSuggestions(state) {
    return state.suggestions
  },
}

const mutations = {
  SET_SUGGESTIONS(state, payload) {
    state.suggestions = payload
  },
}

const actions = {
  async fetchSuggestions({ commit }) {
    try {
      const response = await axios.get(
        `${process.env.NUXT_API}api/recommendations`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      commit('SET_SUGGESTIONS', response.data.data)
    } catch (e) {
      console.error('CANNOT_GET_SUGGESTIONS', e)
    }
  },
  async deleteSuggestions({ commit, dispatch }, payload) {
    try {
      const response = await axios.delete(
        `${process.env.NUXT_API}api/recommendations/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      dispatch('suggestions/fetchSuggestions', null, { root: true })
    } catch (e) {
      console.error(e)
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
