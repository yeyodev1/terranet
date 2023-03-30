import axios from 'axios'

const state = () => ({
    support: [],
})

const getters = {
    getSupport(state) {
        return state.support
    },
}

const mutations = {
    SET_SUPPORTS(state, payload) {
        state.support = payload
    },
    REMOVE_SUPPORT(state, payload) {
        const idx = state.support.findIndex((s) => s._id === payload)
        state.support.splice(idx, 1)
    },
}

const actions = {
    async fetchSupport({ commit }) {
        try {
            const response = await axios.get(
                `${process.env.NUXT_API}api/contactUs`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem('token')
                        )}`,
                    },
                }
            )
            commit('SET_SUPPORTS', response.data.data)
        } catch (e) {
            console.error('CANNOT_GET_QUESTIONS', e)
        }
    },
    async deleteSupport({ commit }, payload) {
        try {
            const response = await axios.delete(
                `${process.env.NUXT_API}api/contactUs/${payload}`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem('token')
                        )}`,
                    },
                }
            )
            commit('REMOVE_SUPPORT', payload)
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
