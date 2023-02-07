<template>
    <div class="w-full">
      <Pay />
      <Benefits />
    </div>
  </template>
  
  <script>
  import Footer from '~/components/global/The/Footer.vue'
  import Pay from '~/components/PayPlan/pay.vue'
  export default {
    components: { Footer, Pay },
  }
  </script>
  