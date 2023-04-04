import axios from 'axios'

const state = () => ({
  banks: [],
  error: '',
  selectedBank: {},
})

const getters = {
  getBanks: (state) => state.banks,
  getError: (state) => state.error,
  selectedBank: (state) => state.selectedBank,
}

const mutations = {
  SET_BANKS: (state, payload) => {
    state.banks = payload
  },
  SET_BANK: (state, payload) => {
    state.banks.push(payload)
  },
  REMOVE_BANK: (state, payload) => {
    const id = state.banks.findIndex((bank) => bank._id === payload)
    state.banks.splice(id, 1)
  },
  SET_ERROR(state) {
    state.error = ''
  },
  CLEAR_ERROR: (state) => {
    state.error = ''
  },
}

const actions = {
  async fetchBanks({ commit }) {
    try {
      const response = await axios.get(
        `${process.env.NUXT_API}api/bankAccounts`
      )
      commit('SET_BANKS', response.data.data)
    } catch (error) {
      console.error('Error fetching banks', error)
      commit('CLEAR_ERROR')
      commit('SET_ERROR')
      setTimeout(() => {
        commit('CLEAR_ERROR')
      }, 1500)
    }
  },

  async createBank({ commit, dispatch }, payload) {
    try {
      const response = await axios.post(
        `${process.env.NUXT_API}api/bankAccounts/`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      dispatch('fetchBanks')
    } catch (error) {
      console.error('Error creating bank', error)
      commit('SET_ERROR')
      setTimeout(() => {
        commit('CLEAR_ERROR')
      }, 1500)
    }
  },

  async deleteBank({ commit, dispatch }, payload) {
    try {
      await axios.delete(`${process.env.NUXT_API}api/bankAccounts/${payload}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      })
      dispatch('fetchBanks')
    } catch (error) {
      console.error('Error deleting bank', error)
    }
  },

  selectBank({ commit }, payload) {
    commit('SELECT_BANK', payload)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
