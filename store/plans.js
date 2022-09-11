import axios from 'axios';

const state = () => ({
    plans: [],
    error: ""
})

const getters = {
    getPlans(state) {
        return state.plans
    },
    getError(state) {
        return state.error
    }
}

const mutations = {
    SET_PLANS(state, payload) {
        state.plans = payload
    },
    SET_PLAN(state, payload) {
        state.plans.push(payload)
    },
    SET_ERROR(state) {
        state.error = 'Uuups tuvimos un problema'
    },
    CLEAR_ERROR(state) {
        state.error = ''
    }
}

const actions = {
    async fetchPlans({commit}) {
        try {
            console.log('estamos inicializados')
            const plans = await axios.get(`${process.env.NUXT_API}api/plansBoard`)
            commit('SET_PLANS', plans.data.data)
        } catch (e) {
            console.error('CANNOT_GET_PLANS', e)
            commit('SET_ERROR')
            setTimeout(() => {
                commit('CLEAR_ERROR')
            }, 1500);
        }
    },
    async  createPlan({commit, rootState}, payload) {
        try {
            console.log(localStorage.getItem('token'))
            const response = await axios.post(`${process.env.NUXT_API}api/plansBoard`, payload, {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem('token'))
                }
            })
            commit('SET_PLAN', payload)
        } catch (e) {
            commit('SET_ERROR')
            setTimeout(() => {
                commit('CLEAR_ERROR')
            }, 1500);
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
