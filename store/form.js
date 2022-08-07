const state = () => ({
    isForm: false,
})

const getters = {
    showForm(state) {
        return state.isForm
    },
}

const mutations = {
    SHOW_FORM(state, payload) {
        state.isForm = payload
    },
}

const actions = {
    activeForm({ commit }, payload) {
        commit('SHOW_FORM', payload)
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
