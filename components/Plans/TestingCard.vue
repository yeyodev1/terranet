<template>
  <div class="w-full mt-12 border-2 border-white rounded-2xl">
    <div class="flex items-start justify-start pt-8 px-7">
      <p class="pr-4 text-5xl font-bold text-center text-white font-principal">
        3
      </p>
      <p class="text-base font-bold text-white text-start font-principal">
        La velocidad del internet que necesitas es de:
      </p>
    </div>
    <div class="flex flex-col items-center mb-16">
      <div v-if="!isPlanSelected" class="flex items-end justify-end mt-5 mb-10">
        <div class="relative bottom-3">
          <p class="text-base font-bold text-white font-principal">
            {{ selectedPlan.speed }}
          </p>
        </div>
        <div class="flex flex-col items-end">
          <div>
            <Speedometer />
          </div>
          <div>
            <p class="text-base font-bold text-lightBlue">Mbps</p>
          </div>
          <div>
            <p class="mt-4 font-bold text-white font-open text-lg">{{ selectedPlan.planName }}</p>
          </div>
        </div>
      </div>
      <div v-else class="flex items-end justify-end mt-5 mb-10">
        <div class="relative bottom-3">
          <p class="text-base font-bold text-white font-principal">
            0
          </p>
        </div>
        <div class="flex flex-col items-end">
          <div>
            <Speedometer />
          </div>
          <div>
            <p class="text-base font-bold text-lightBlue">Mbps</p>
          </div>
        </div>
      </div>
      <button class="w-4/5 mt-5 font-semibold text-white border rounded-md border-yellow">
        Lo necesito
      </button>
    </div>
  </div>
</template>
<script>
import Speedometer from '../global/The/Svg/Speedometer.vue'

export default {
  components: {
    Speedometer,
  },
  props: {
    selectedPlan: {
      type: [Object, String],
      required: true
    }
  },
  computed: {
    isPlanSelected() {
      return typeof this.selectedPlan === 'string'
    }
  }
}
</script>
