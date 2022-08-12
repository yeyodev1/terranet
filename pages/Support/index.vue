<template>
  <div class="mx-auto w-full">
    <div
      class="
        w-full
        flex flex-col
        justify-center
        items-center
        xl:mt-24 xl:mb-20
        md:mt-16 md:mb-12
        my-7
      "
    >
      <p class="text-base font-medium text-center text-white sm:text-3xl">
        Atención al cliente
      </p>
      <p class="text-2xl font-bold text-center text-white sm:text-5xl my-3">
        ¿En qué podemos ayudarte?
      </p>
      <p class="text-base font-medium text-center text-white sm:text-2xl">
        Selecciona la opción que necesitas
      </p>
    </div>
    <div class="w-full flex flex-wrap justify-center items-center">
      <support-card
        v-for="(item, index) in support"
        :key="index"
        :icon="item.icon"
        :name="item.name"
      />
    </div>
  </div>
</template>

<script>
import SupportCard from './components/SupportCard.vue'

export default {
  components: {
    SupportCard,
  },
  data: () => ({
    support: [
      {
        icon: 'bank',
        name: 'Medio de pago',
      },
      {
        icon: 'microphone',
        name: 'Soporte técnico',
      },
      {
        icon: 'card',
        name: 'Pago en línea',
      },
      {
        icon: 'truck',
        name: 'Solicitar traslado',
      },
      {
        icon: 'changeUser',
        name: 'Cambio de titular',
      },
      {
        icon: 'changeFile',
        name: 'Actualizar Datos',
      },
      {
        icon: 'accountVoice',
        name: 'Tú opinión',
      },
      {
        icon: 'clockFast',
        name: 'Velocímetro',
      },
      {
        icon: 'statistic',
        name: 'Consultar capacidad',
      },
    ],
  }),
}
</script>