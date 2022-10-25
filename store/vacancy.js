import axios from 'axios'

const state = () => ({
  vacancies: []
})

const getters = {
  getVacancies(state) {
    return state.vacancies
  },
}

const mutations = {
  SET_VACANCIES(state, payload) {
    state.vacancies = payload
  },
}

const actions = {
  async fetchVacancies({ commit }, payload) {
    try {
      const response = await axios.get(`${process.env.NUXT_API}api/jobVacs`,
      {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      commit('SET_VACANCIES', response.data.data)
    } catch (e) {
      console.error('CANNOT_GET_VACANCIES', e)
    }
  },
  async setVacancy({ commit, dispatch }, payload) {
    try {
      const reponse = await axios.post(`${process.env.NUXT_API}api/jobVacs`,
      payload,
      {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      dispatch('vacancy/fetchVacancies', null, { root: true })
    } catch (e) {
      console.error('CANNOT_POST_VACANCY', e)
    }
  },
  async removeVacancy({ commit, dispatch }, payload) {
    try {
      const reponse = await axios.delete(`${process.env.NUXT_API}api/jobVacs/${payload}`,
      {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
      })
      dispatch('vacancy/fetchVacancies', null, { root: true })
    } catch(e) {
      console.error('CANNOT_DELETE_VACANCY', e)
    }
  }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
