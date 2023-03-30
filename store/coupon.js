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
  async saveCoupon({ commit, dispatch }, payload) {
    try {
      const response = await axios.post(
        `${process.env.NUXT_API}api/promotionCode`,
        payload
      )
      dispatch('coupon/getCoupon', null, { root: true })
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
  async deleteCoupon({ commit }, payload) {
    try {
      const response = await axios.delete(
        `${process.env.NUXT_API}api/promotionCode/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      dispatch('coupon/getCoupon', null, { root: true })
    } catch (error) {
      console.error('CANNOT_DELETE_PROMOTION')
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
