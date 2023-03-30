import axios from 'axios'

const state = () => ({
    changeLocation: [],
})

const getters = {
    getChangeLocation(state) {
        return state.changeLocation
    },
}

const mutations = {
    SET_CHANGE_LOCATION(state, payload) {
        state.changeLocation = payload
    },
}

const actions = {
    async fetchChangeLocation({ commit }) {
        try {
            const response = await axios.get(
                `${process.env.NUXT_API}api/homeTransferReq`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem('token')
                        )}`,
                    },
                }
            )
            commit('SET_CHANGE_LOCATION', response.data.data)
        } catch (e) {
            console.error('CANNOT_GET_CHANGE_LOCATIONS', e)
        }
    },
    async deleteChangeLocation({ commit, dispatch }, payload) {
        try {
            const response = await axios.delete(
                `${process.env.NUXT_API}api/homeTransferReq/${payload}`,
                {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(
                            localStorage.getItem('token')
                        )}`,
                    },
                }
            )
            dispatch('changeLocation/fetchChangeLocation', null, { root: true })
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
