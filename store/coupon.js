import axios from 'axios'

const state = () => ({
  isCoupon: {},
})

const getters = {
  showCoupon(state) {
    return state.isCoupon
  },
}

const mutations = {
  SET_COUPON(state, payload) {
    state.isCoupon = payload
  },
}

const actions = {
  async saveCoupon({ commit }, payload) {
    try {
      const response = await axios.post(
        `${process.env.NUXT_API}api/promotionCode`,
        payload
      )
      commit('SET_COUPON', response.data.data)
    } catch (e) {
      console.error(e)
    }
  },
  async getCoupon({ commit }) {
    try {
      const response = await axios.get(
        `${process.env.NUXT_API}api/promotionCode`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      if (!response.data.data.length) {
        return commit('SET_COUPON', {})
      }
      commit('SET_COUPON', response.data.data[0])
    } catch (e) {
      console.error(e)
    }
  },
  deleteCoupon({ commit }) {
    commit('SET_COUPON', {})
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
