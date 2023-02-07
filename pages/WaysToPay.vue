<template>
    <div class="w-full">
      <div class="background">
        <p
          class="
            pt-8
            text-2xl
            font-bold
            text-center text-white
            font-principal
            sm:text-5xl
          "
        >
          Formas de pago
        </p>
        <p class="text-base text-center text-white font-principal sm:text-3xl">
          <strong class="text-lightBlue font-principal">Terranet</strong>
          piensa en tu comodidad
        </p>
        <PayMethods />
        <Benefits />
        <PhoneCallToAction />
      </div>
    </div>
  </template>
  
  <script>
  import Header from '~/components/global/The/Header.vue'
  import PayMethods from '~/components/Cards/PayMethods.vue'
  import Benefits from '~/components/Home/Benefits.vue'
  import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
  export default {
    components: { Header, PayMethods, Benefits, PhoneCallToAction },
  }
  </script>
  
  <style scoped>
  .background {
    background-image: url('@/static/Backgrounds/background-4.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  </style>
  