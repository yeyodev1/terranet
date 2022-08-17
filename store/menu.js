const state = () => ({
    isMenu: false,
})

const getters = {
    showMenu(state) {
        return state.isMenu
    },
}

const mutations = {
    SHOW_MENU(state, payload) {
        state.isMenu = payload
    },
}

const actions = {
    activeMenu({ commit }, payload) {
        commit('SHOW_MENU', payload)
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
