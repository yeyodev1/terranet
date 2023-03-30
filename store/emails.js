import axios from 'axios'

const state = () => ({
  emails: [],
})

const getters = {
  getEmails(state) {
    return state.emails
  },
}

const mutations = {
  SET_EMAILS(state, payload) {
    state.emails = payload
  },
}

const actions = {
  async fetchEmails({ commit }) {
    try {
      const response = await axios.get(`${process.env.NUXT_API}api/emails`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      })
      console.log(response)
      commit('SET_EMAILS', response.data.data)
    } catch (e) {
      console.error('CANNOT_GET_EMAILS', e)
    }
  },
  async updateEmails({ commit, dispatch }, payload) {
    try {
      const request = {
        email: payload.email,
        subject: payload.subject,
      }
      console.log(payload)
      const response = await axios.put(
        `${process.env.NUXT_API}api/emails/${payload._id}`,
        request,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      dispatch('emails/fetchEmails', null, { root: true })
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
