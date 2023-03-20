<template>
  <div class="w-full">
    <div class="w-4/5 max-w-6xl mx-auto relative">
      <div class="w-full py-20 relative z-10">
        <h1 class="font-extralight text-white text-5xl mb-1">
          Esta vez
          <br />
          <span class="font-bold text-lightBlue">TERRANET</span>
          <span class="font-bold text-white">te necesita</span>
        </h1>
        <h2 class="text-2xl font-extralight text-white pl">
          Escoge tu área de especialidad
        </h2>
      </div>
      <div class="w-4/5 lg:w-1/2 max-w-xl h-64 absolute top-0 right-0">
        <div class="w-full h-full mask" />
      </div>
    </div>
    <div class="w-4/5 max-w-6xl mx-auto my-20">
      <div v-if="getVacancies.length" class="mt-4">
        <vacancy-card v-for="(vacancy, index) in getVacancies" :key="index" :vacancy="vacancy"
          @applicant-form="sendApplication" class="mb-4" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VacancyCard from '~/components/Cards/VacancyCard.vue'

export default {
  components: { VacancyCard },
  computed: {
    ...mapGetters('vacancy', ['getVacancies']),
  },
  methods: {
    ...mapActions('vacancy', ['fetchVacancies']),
    sendApplication(value) {
      console.log(value)
    },
  },
  mounted() {
    if (!this.getVacancies.length) {
      this.fetchVacancies()
    }
  },
}
</script>

<style scoped>
.mask {
  clip-path: polygon(100% 0, 0 0, 39% 86%, 100% 48%);
  background-image: url('@/static/Images/hands.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
