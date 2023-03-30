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
    REMOVE_QUESTION(state, payload) {
        const idx = state.frequentQuestions.findIndex(
            (question) => question._id === payload
        )
        state.frequentQuestions.splice(idx, 1)
    },
}

const actions = {
    async fetchQuestions({ commit }) {
        try {
            const response = await axios.get(`${process.env.NUXT_API}api/FAQ`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem('token')
                    )}`,
                },
            })
            commit('SET_QUESTIONS', response.data.data)
        } catch (e) {
            console.error('CANNOT_GET_QUESTIONS', e)
        }
    },
    async setQuestion({ commit }, payload) {
        try {
            const response = await axios.post(
                `${process.env.NUXT_API}api/FAQ`,
                payload,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem('token')
                        )}`,
                    },
                }
            )
            commit('SET_QUESTION', response.data.data)
        } catch (e) {
            console.error(e)
        }
    },
    async deleteQuestion({ commit }, payload) {
        try {
            const response = await axios.delete(
                `${process.env.NUXT_API}api/FAQ/${payload}`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem('token')
                        )}`,
                    },
                }
            )
            commit('REMOVE_QUESTION', payload)
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
