<template>
  <div class="w-full">
    <div class="w-4/5 max-w-2xl mx-auto mt-6 mb-4 border rounded-lg sm:mb-10 border-lightBlue sm:mt-10">
      <div class="px-6 mt-6">
        <h4 class="text-2xl font-bold text-center text-white font-principal sm:text-4xl">
          Cúpon de descuento
        </h4>
        <p class="text-base text-center text-white lg:text-2xl font-principal">
          Contrata tu plan en línea y obtén beneficios
        </p>
      </div>
      <Coupon />
    </div>
    <Benefits />
    <PhoneCallToAction />
  </div>
</template>

<script>
import Coupon from '~/components/Coupon/Coupon.vue'
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
export default {
  components: {
    Coupon,
    Benefits,
    PhoneCallToAction,
  },
}
</script>
