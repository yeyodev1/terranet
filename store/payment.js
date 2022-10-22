import axios from 'axios'

const state = () => ({
  customers: [],
})

const getters = {
  getCustomers(state) {
    return state.customers
  },
}

const mutations = {
  SET_CUSTOMERS(state, payload) {
    state.customers = payload
  },
  CUSTOMER_PAYED(state, payload) {
    const idx = state.support.findIndex(s => s._id === payload)
    // state.support.splice(idx, 1)
  }
}

const actions = {
  async fetchCustomers({ commit }) {
    try {
      const response = await axios.get(`${process.env.NUXT_API}api/payment`,
      {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      commit('SET_CUSTOMERS', response.data.data)
    } catch (e) {
      console.error('CANNOT_GET_CUSTOMERS', e)
    }
  },
  async customerPayed({ commit }, payload) {
    try {
      const response = await axios.patch(`${process.env.NUXT_API}api/payment/${payload}`,
        {
          headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
        }
      )
      commit('CUSTOMER_PAYED', payload)
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
