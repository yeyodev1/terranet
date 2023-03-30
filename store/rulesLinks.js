import axios from 'axios'

const state = () => ({
  rules: [],
})

const getters = {
  getRules(state) {
    return state.rules
  },
}

const mutations = {
  SET_RULES(state, payload) {
    state.rules = payload
  },
}

const actions = {
  async fetchRules({ commit }, payload) {
    try {
      const response = await axios.get(
        `${process.env.NUXT_API}api/footerLinks`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      if (!response.data.data.length) {
        return commit('SET_RULES', [])
      }
      commit('SET_RULES', response.data.data)
    } catch (e) {
      console.error(e)
    }
  },
  async setRule({ commit, dispatch }, payload) {
    try {
      const response = await axios.post(
        `${process.env.NUXT_API}api/footerLinks`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      dispatch('rulesLinks/fetchRules', null, { root: true })
    } catch (e) {
      console.error(e)
    }
  },
  async removeRule({ commit, dispatch }, payload) {
    try {
      const response = await axios.delete(
        `${process.env.NUXT_API}api/footerLinks/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      dispatch('rulesLinks/fetchRules', null, { root: true })
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
