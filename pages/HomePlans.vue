<template>
  <div class="background">
    <div class="w-4/5 mx-auto max-w-7xl">
      <p
        class="mt-8 text-2xl font-bold text-center text-white lg:pt-20 sm:text-5xl"
      >
        Plan Hogar
      </p>
      <p class="text-base font-medium text-center text-white sm:text-2xl">
        ¡Tenemos el plan que necesitas!
      </p>
      <div class="flex flex-wrap items-center justify-between w-full max-w-7xl">
        <div
          class="w-full mt-6 sm:w-2/5 sm:mt-12"
          v-for="(homePlan, index) in getPlans"
          :key="index"
        >
          <Plan :homePlan="homePlan" />
        </div>
      </div>
    </div>
    <TestPlan />
  </div>
</template>

<script>
import TestPlan from '~/components/Plans/TestPlan.vue'
import Footer from '~/components/global/The/Footer.vue'
import Plan from '~/components/Plans/Plan.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TestPlan,
    Footer,
    Plan,
  },
  computed: {
    ...mapGetters('plans', ['getPlans']),
  },
}
</script>

<style scoped>
@font-face {
  font-family: 'FontJek';
  font-display: swap;
  src: url('@/assets/fonts/Fontjek.ttf') format('truetype');
}
</style>
