import axios from 'axios'

const state = () => ({
  requestedUpdates: [],
})

const getters = {
  getRequestedUpdates(state) {
    return state.requestedUpdates
  },
}

const mutations = {
  SET_REQUESTED_UPDATES(state, payload) {
    state.requestedUpdates = payload
  },
}

const actions = {
  async fetchRequestedUpdates({ commit }) {
    try {
      const response = await axios.get(
        `${process.env.NUXT_API}api/updateData`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      commit('SET_REQUESTED_UPDATES', response.data.data)
    } catch (e) {
      console.error('CANNOT_GET_REQUESTED_UPDATES', e)
    }
  },
  async deleteRequestedUpdates({ commit, dispatch }, payload) {
    try {
      const response = await axios.delete(
        `${process.env.NUXT_API}api/updateData/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      dispatch('updateOwner/fetchRequestedUpdates', null, { root: true })
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
