const state = () => ({
    frequentQuestions: [
        {
            question: '¿Necesitas trasladar tu servicio a otro lugar?',
            answer: 'El costo aproximado de traslado es de $80 + IVA. Si tienes más de 12 meses con nosotros podrás acceder a un traslado sin costo por una sola ocasión.Para solicitar el traslado puedes hacerlo ingresando a nuestro Portal de autoservicio, al correo atencionalcliente@puntonet.ec, desde nuestro Asistente Virtual CELTY al WhatsApp +593 980 828 349. Por favor especifica claramente la dirección, numeración y referencias, si cuentas con las coordenadas exactas nos ayudarías mucho con el proceso. Celerity EC, te entrega una cantidad de 350 metros de cable para la instalación en tu nuevo domicilio si tu plan es de Fibra, si la distancia es mayor, la instalación no será posible.',
        },
        {
            question: '¿Necesitas trasladar tu servicio a otro lugar?',
            answer: 'El costo aproximado de traslado es de $80 + IVA. Si tienes más de 12 meses con nosotros podrás acceder a un traslado sin costo por una sola ocasión.Para solicitar el traslado puedes hacerlo ingresando a nuestro Portal de autoservicio, al correo atencionalcliente@puntonet.ec, desde nuestro Asistente Virtual CELTY al WhatsApp +593 980 828 349. Por favor especifica claramente la dirección, numeración y referencias, si cuentas con las coordenadas exactas nos ayudarías mucho con el proceso. Celerity EC, te entrega una cantidad de 350 metros de cable para la instalación en tu nuevo domicilio si tu plan es de Fibra, si la distancia es mayor, la instalación no será posible.',
        },
        {
            question: '¿Necesitas trasladar tu servicio a otro lugar?',
            answer: 'El costo aproximado de traslado es de $80 + IVA. Si tienes más de 12 meses con nosotros podrás acceder a un traslado sin costo por una sola ocasión.Para solicitar el traslado puedes hacerlo ingresando a nuestro Portal de autoservicio, al correo atencionalcliente@puntonet.ec, desde nuestro Asistente Virtual CELTY al WhatsApp +593 980 828 349. Por favor especifica claramente la dirección, numeración y referencias, si cuentas con las coordenadas exactas nos ayudarías mucho con el proceso. Celerity EC, te entrega una cantidad de 350 metros de cable para la instalación en tu nuevo domicilio si tu plan es de Fibra, si la distancia es mayor, la instalación no será posible.',
        },
    ],
})

const getters = {
    getFrequentQuestion(state) {
        return state.frequentQuestions
    },
}

const mutations = {
    SET_QUESTION(state, payload) {
        state.frequentQuestions = payload
    },
}

const actions = {
    async fetchQuestions() {
        try {
            const frequentQuestions = await aksfjdakljsf
            commit('SET_QUESTION', frequentQuestions)
        } catch (e) {
            console.error('CANNOT_GET_QUESTIONS')
        }
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
