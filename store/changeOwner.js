import axios from 'axios'

const state = () => ({
    changeOwners: [],
})

const getters = {
    getChangeOwners(state) {
        return state.changeOwners
    },
}

const mutations = {
    SET_CHANGE_OWNER(state, payload) {
        state.changeOwners = payload
    },
}

const actions = {
    async fetchChangeOwners({ commit }) {
        try {
            const response = await axios.get(
                `${process.env.NUXT_API}api/changeOwner`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem('token')
                        )}`,
                    },
                }
            )
            commit('SET_CHANGE_OWNER', response.data.data)
        } catch (e) {
            console.error('CANNOT_GET_CHANGE_OWNERS', e)
        }
    },
    async deleteChangeOwner({ commit, dispatch }, payload) {
        try {
            const response = await axios.delete(
                `${process.env.NUXT_API}api/changeOwner/${payload}`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem('token')
                        )}`,
                    },
                }
            )
            dispatch('changeOwner/fetchChangeOwners', null, { root: true })
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
