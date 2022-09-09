<template>
    <div class="w-full pb-8 pt-11 md:pt-16 md:pb-16">
        <div class="mx-auto max-w-7xl">
            <p
                class="text-2xl font-bold text-center text-white font-principal sm:text-5xl"
            >
                Preguntas frecuentes
            </p>
            <p
                class="text-base text-center text-grey font-pricipal sm:text-3xl"
            >
                Parece que alguien ya hizo esa pregunta
            </p>
        </div>
        <div
            class="flex flex-wrap items-baseline justify-center w-4/5 max-w-6xl mx-auto mt-6 sm:justify-around sm:mt-9 lg:mt-12"
        >
            <div
                class="flex w-full sm:w-5/12"
                v-for="(question, index) in questions"
                :key="index"
            >
                <Question :question="question" />
            </div>
        </div>
    </div>
</template>

<script>
import Icons from '../global/Icons.vue'
import Question from './Question.vue'
export default {
    components: { Icons, Question },
    data: () => ({
        questions: [
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
            {
                question: '¿Necesitas trasladar tu servicio a otro lugar?',
                answer: 'El costo aproximado de traslado es de $80 + IVA. Si tienes más de 12 meses con nosotros podrás acceder a un traslado sin costo por una sola ocasión.Para solicitar el traslado puedes hacerlo ingresando a nuestro Portal de autoservicio, al correo atencionalcliente@puntonet.ec, desde nuestro Asistente Virtual CELTY al WhatsApp +593 980 828 349. Por favor especifica claramente la dirección, numeración y referencias, si cuentas con las coordenadas exactas nos ayudarías mucho con el proceso. Celerity EC, te entrega una cantidad de 350 metros de cable para la instalación en tu nuevo domicilio si tu plan es de Fibra, si la distancia es mayor, la instalación no será posible.',
            },
        ],
    }),
}
</script>
