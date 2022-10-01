<template>
  <div class="w-full mx-auto">
    <div
      class="flex flex-col items-center justify-center w-full  xl:mt-24 xl:mb-20 md:mt-16 md:mb-12 my-7"
    >
      <p class="text-base font-medium text-center text-white sm:text-3xl">
        Atención al cliente
      </p>
      <p class="my-3 text-2xl font-bold text-center text-white sm:text-5xl">
        ¿En qué podemos ayudarte?
      </p>
      <p class="text-base font-medium text-center text-white sm:text-2xl">
        Selecciona la opción que necesitas
      </p>
    </div>
    <div
      class="flex flex-wrap items-center justify-center w-full max-w-4xl mx-auto "
    >
      <div
        v-for="(item, index) in support"
        :key="index"
        class="flex items-center justify-center w-1/2 p-5 sm:w-auto lg:w-1/3"
      >
        <support-card :icon="item.icon" :name="item.name" :path="item.path" />
      </div>
    </div>
    <div class="w-full mx-auto my-20">
      <p class="text-2xl font-semibold text-center text-white lg:text-4xl">
        Alguien ya hizo esa pregunta:
      </p>
      <div class="flex items-center justify-center mt-3">
        <p class="text-base font-medium text-center text-white">
          Consulta las preguntas frecuentas aquí
        </p>
        <nuxt-link to="/frequentquestions">

          <div class="flex items-center justify-center w-6 h-6">
            <icons name="arrowRight" class="text-yellow" />
          </div>
        </nuxt-link>
      </div>
    </div>
    <HomeBenefits />
    <HomePhoneCallToAction />
  </div>
</template>

<script>
import Icons from '~/components/global/Icons.vue'
import SupportCard from './components/SupportCard.vue'

export default {
  components: {
    SupportCard,
    Icons,
  },
  data: () => ({
    support: [
      {
        icon: 'bank',
        path: '/waystopay',
        name: 'Medio de pago',
      },
      {
        icon: 'microphone',
        path: '/contact',
        number: 'tel:+593991005007',
        name: 'Soporte técnico',
      },
      {
        icon: 'card',
        path: '/payplan',
        name: 'Pago en línea',
      },
      {
        icon: 'truck',
        path: '/requesttransfers',
        name: 'Solicitar traslado',
      },
      {
        icon: 'changeUser',
        path: '/changeownership',
        name: 'Cambio de titular',
      },
      {
        icon: 'changeFile',
        path: '/updatedata',
        name: 'Actualizar Datos',
      },
      {
        icon: 'accountVoice',
        path: '/youropinion',
        name: 'Tú opinión',
      },
      {
        icon: 'clockFast',
        path: '/speedometer',
        name: 'Velocímetro',
      },
      {
        icon: 'statistic',
        path: '/checkcapacity',
        name: 'Consultar capacidad',
      },
    ],
  }),
}
</script>
