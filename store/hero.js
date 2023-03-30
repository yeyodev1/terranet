import axios from 'axios'

const state = () => ({
  hero: '',
})

const getters = {
  getHero(state) {
    return state.hero
  },
}

const mutations = {
  SET_HERO(state, payload) {
    state.hero = payload
  },
}

const actions = {
  async fetchHero({ commit }) {
    try {
      const response = await axios.get(`${process.env.NUXT_API}api/hero`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      })
      commit('SET_HERO', response.data.data[0].url)
    } catch (e) {
      console.error('CANNOT_GET_IMAGE', e)
    }
  },
  async setHero({ commit }, payload) {
    try {
      const response = await axios.post(
        `${process.env.NUXT_API}api/hero`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      commit('SET_HERO', response.data.data.url)
    } catch (e) {
      console.error(e)
    }
  },
  // async deleteHero({ commit }, payload) {
  //   try {
  //     const response = await axios.delete(`${process.env.NUXT_API}api/FAQ/${payload}`,
  //       {
  //         headers: {
  //             Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  //         }
  //       }
  //     )
  //     commit('REMOVE_QUESTION', payload)
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
