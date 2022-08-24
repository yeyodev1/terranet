const state = () => ({
    isCoupon: false,
})

const getters = {
    putCoupon(state) {
        return state.isCoupon
    },
}

const mutations = {
    SHOW_COUPON(state, payload) {
        state.isCoupon = payload
    },
}

const actions = {
    activeCoupon({ commit }, payload) {
        commit('SHOW_COUPON', payload)
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
