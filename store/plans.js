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
    EDIT_PLAN(state, payload) {
        const id = state.plans.findIndex(plan => plan._id === payload.id)
        state.plans[id] = payload
    },
    ERASE_PLAN(state, payload) {
        const id = state.plans.findIndex(plan => plan._id === payload)
        state.plans.splice(id, 1)
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
    async  createPlan({commit}, payload) {
        try {
            const response = await axios.post(`${process.env.NUXT_API}api/plansBoard`, payload, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
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
    },
    async editPlan({commit}, payload) {
        try {
            const response = await axios.put(`${process.env.NUXT_API}api/plansBoard/${payload.id}`, payload, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            commit('EDIT_PLAN', payload)
        } catch (e) {
            commit('SET_ERROR')
            setTimeout(() => {
                commit('CLEAR_ERROR')
            }, 1500);
            console.error(e)
        }
    },
    async deletePlan({commit}, payload) {
        try {
            const response = await axios.delete(`${process.env.NUXT_API}api/plansBoard/${payload}`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            commit('ERASE_PLAN', payload)
        } catch(e) {

        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
}
