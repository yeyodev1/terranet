import axios from 'axios'

const state = () => ({
  customers: [],
  pagination: {},
  isLoading: false,
  customerResult: {}
})

const getters = {
  getCustomers(state) {
    return state.customers || []
  },
  getPagination(state) {
    return state.pagination || {}
  },
  getLoading(state) {
    return state.isLoading
  },
  getCustomerResult(state) {
    return state.customerResult
  }
}

const mutations = {
  SET_CUSTOMERS(state, payload) {
    state.customers = payload
  },
  SET_PAGINATION(state, payload) {
    state.pagination = payload
  },
  CUSTOMER_PAYED(state, payload) {
    const idx = state.support.findIndex(s => s._id === payload)
    // state.support.splice(idx, 1)
  },
  SET_LOADING(state, payload) {
    state.isLoading = payload
  },
  SET_CUSTOMER_RESULT(state, payload) {
    state.customerResult = payload
  },
  CLEAR_CUSTOMER_RESULT(state) {
    state.customerResult = {}
  }
}

const actions = {
  async fetchCustomers({ commit }, payload) {
    try {
      if(payload === undefined) {
        payload = 1
      }
      const response = await axios.get(`${process.env.NUXT_API}api/payment?page=${payload}`,
      {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      const data = response.data.data
      commit('SET_CUSTOMERS', data.docs)
      commit('SET_PAGINATION',
        { 
          page: data.page,
          next: data.nextPage,
          previous: data.prevPage,
          hasNext: data.hasNextPage,
          hasPrev: data.hasPrevPage
        })
    } catch (e) {
      console.error('CANNOT_GET_CUSTOMERS', e)
    }
  },
  async fetchCustomersByCi({ commit }, payload) {
    try {
      const response = await axios.get(`${process.env.NUXT_API}api/payment/${payload}`,
      {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      commit('SET_CUSTOMER_RESULT', response.data.data || {})
    } catch (e) {
      console.error('CANNOT_GET_CUSTOMERS', e)
    }
  },
  async uploadExcel({ commit, dispatch }, payload) {
    try {
      commit('SET_LOADING', true)
      const response = await axios.post(`${process.env.NUXT_API}api/excelFile`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        }
      }
      )
      dispatch('payment/fetchCustomers', 1, { root: true })
      commit('SET_LOADING', false)
    } catch (e) {
      console.error(e)
    }
  },
  clearCustomerResult({ commit }) {
    commit('CLEAR_CUSTOMER_RESULT')
  }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
