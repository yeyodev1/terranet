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
  SET_RULE(state, payload) {
    state.rules.push(payload)
  },
  REMOVE_RULE(state, payload) {
    const idx = state.rules.findIndex(rule => rule._id === payload)
    state.rules.splice(idx, 1)
  }
}

const actions = {
  async fetchRules({ commit }, payload) {
    try {
      console.log(payload)
      const response = await axios.get(
        `${process.env.NUXT_API}api/footerLinks`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
          },
        }
      )
      commit('SET_RULES', response.data.data)
    } catch (e) {
      console.error(e)
    }
  },
  async setRule({ commit }, payload) {
    try {
      console.log(payload)
      const response = await axios.post(
        `${process.env.NUXT_API}api/footerLinks`,
        payload,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
          },
        }
      )
      if (!response.data.data.length) {
        return (commit('SET_COUPON', []))
      }
      commit('SET_COUPON', response.data.data[0])  
    } catch (e) {
      console.error(e)
    }
  },
  async deleteRule({ commit },payload) {
    try {
      const response = await axios.delete(
        `${process.env.NUXT_API}api/footerLinks`,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
          },
        }
      )
      commit('REMOVE_RULE', {})
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
