const state = () => ({
    plans: [
        {
            title: 'Plan Mítico',
            price: '44.65',
            mbps: '120',
        },
        {
            title: 'Plan Élite',
            price: '35.71',
            mbps: '80',
        },
        {
            title: 'Plan Máster',
            price: '31.25',
            mbps: '70',
        },
        {
            title: 'Plan basic',
            price: '31.25',
            mbps: '50',
        },
    ],
})

const getters = {
    getPlans(state) {
        return state.plans
    },
}

const mutations = {
    SET_PLANS(state, payload) {
        state.plans = payload
    },
}

const actions = {
    async fetchPlans() {
        try {
            const plans = await fjksdahfjdhsjfka
            commit('SET_PLANS', plans)
        } catch (e) {
            console.error('CANNOT_GET_PLANS', e)
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
