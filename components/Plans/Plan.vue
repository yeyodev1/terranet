<template>
  <div class="relative flex flex-col items-center">
    <div class="flex flex-col items-center justify-center w-full rounded-md background-plans">
      <p class="px-8 pt-10 text-5xl text-center font-secondary text-yellow whitespace-nowrap">
        {{ homePlan.planName }}
      </p>
      <div class="flex pt-3">
        <p class="text-4xl font-extrabold text-white font-principal">
          ${{ getDollars }}
        </p>
        <div class="flex flex-col items-start justify-start">
          <p class="text-white font-principal font-extrabold text-2xl">
            .{{ getCents }}
          </p>
          <p class="text-xs font-semibold text-yellow">+IMP</p>
        </div>
      </div>
      <div class="flex flex-col mt-12 mb-8">
        <div>
          <Speedometer />
        </div>
        <div class="flex">
          <p class="text-3xl font-semibold text-white font-principal">
            {{ homePlan.speed }}
          </p>
          <p class="text-base text-white font-principal">Mbps</p>
        </div>
      </div>
    </div>
    <button v-if="isInAdmin" @click="getPlanId" class="mt-2 py-1 px-2 mx-auto bg-yellow rounded-lg">
      Editar
    </button>
    <button v-if="isInAdmin" @click="deleteSelectedPlan"
      class="w-5 h-5 flex justify-center items-center rounded-full bg-red absolute top-0 right-0">
      <icons name="close" class="text-white" />
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Icons from '../global/Icons.vue'
import Speedometer from '../global/The/Svg/Speedometer.vue'
export default {
  components: { Speedometer, Icons },
  props: {
    homePlan: {
      type: Object,
      required: true,
    },
  },
  computed: {
    // THIS COMPUTED FUNCTION GET THE DOLLARS OF A VALUE
    getDollars() {
      return Math.trunc(
        Math.round((this.homePlan.price * 100) / 100).toFixed(2)
      )
    },
    // THIS COMPUTED FUNCTION GET THE CENTS OF A VALUE
    getCents() {
      const decimalStr = (this.homePlan.price % 1).toFixed(2).substring(2)
      return Number(decimalStr)
    },
    isInAdmin() {
      return this.$route.path.includes('/admin')
    },
  },
  methods: {
    ...mapActions('plans', ['deletePlan']),
    getPlanId() {
      this.$emit('edit-plan', this.homePlan)
    },
    deleteSelectedPlan() {
      this.deletePlan(this.homePlan._id)
    },
  },
}
</script>

<style scoped>
.background-plans {
  background-image: url('@/static/Backgrounds/Button/BackgroundPlanButton.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
