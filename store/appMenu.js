const state = () => ({
  isOpen: false,
})

const getters = {
  isMenuOpen(state) {
    return state.isOpen
  },
}

const mutations = {
  SHOW_MENU(state, payload) {
      state.isOpen = payload
  },
}

const actions = {
  showMenu({ commit }, payload) {
      commit('SHOW_MENU', payload)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
