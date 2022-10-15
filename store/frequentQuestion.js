import axios from 'axios'

const state = () => ({
  frequentQuestions: [],
})

const getters = {
  getFrequentQuestion(state) {
    return state.frequentQuestions
  },
}

const mutations = {
  SET_QUESTIONS(state, payload) {
    state.frequentQuestions = payload
  },
  SET_QUESTION(state, payload) {
    state.frequentQuestions.push(payload)
  },
  REMOVE_QUESTIONS(state, payload) {
    // const idx = state.frequentQuestions.findIndex()
    console.log(payload)
  }
}

const actions = {
  async fetchQuestions({ commit }) {
    try {
      const response = await axios.get(`${process.env.NUXT_API}api/FAQ`,
      {
        headers: {
            Authorization: JSON.parse(localStorage.getItem('token'))
        }
      })
      commit('SET_QUESTIONS', response.data.data)
    } catch (e) {
      console.error('CANNOT_GET_QUESTIONS', e)
    }
  },
  async setQuestion({ commit }, payload) {
    try {
      console.log(payload)
      const response = await axios.post(`${process.env.NUXT_API}api/FAQ`,
        payload,
        {
          headers: {
              Authorization: JSON.parse(localStorage.getItem('token'))
          }
        }
      )
      commit('SET_QUESTION', response.data.data)
    } catch (e) {
      console.error(e)
    }
  },
  deleteQuestion({ commit }, payload) {
    console.log(payload)
  }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
