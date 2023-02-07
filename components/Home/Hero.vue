<template>
  <div
    v-if="getHero.length"
    class="w-full border-b-2 py-20 border-white mx-auto bg-image"
    :style="{ 'background-image': 'url(' + getHero + ')' }"
  >
    <!-- MAIN IDEA  -->
    <div class="w-4/5 mx-auto max-w-7xl">
      <div class="w-full mt-8">
        <p class="font-principal text-2xl font-bold text-white sm:text-4xl">
          Internet 100% fibra <br class="sm:hidden" />
          óptica
        </p>
      </div>
      <div class="w-full mb-2">
        <p class="font-principal font-semibold text-xs text-white sm:text-2xl">
          Sin límites para tu hogar <br class="sm:hidden" />
          y negocio
        </p>
      </div>
    </div>
    <div class="mx-auto w-4/5 flex justify-between max-w-7xl">
      <div class="flex flex-col">
        <div
          v-for="(trait, index) in traits"
          :key="index"
          class="flex flex-col"
        >
          <div class="flex justify-start items-center">
            <Plus class="w-3 h-3 sm:w-5 sm:h-5 pr-1" />
            <p class="font-principal text-xs sm:text-3xl text-white">
              {{ trait.name }}
            </p>
          </div>
        </div>
        <div>
          <PromotionButton />
        </div>
      </div>
      <!-- <div class="">
        <Man class="sm:hidden" />
        <img
          src="@/static/Man/Capa2.png"
          alt="hombre en computadora super loco"
          class="hidden sm:flex"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Man from '../global/The/Svg/Man.vue'
import Plus from '../global/The/Svg/Plus.vue'
import PromotionButton from './PromotionButton.vue'

export default {
  components: {
    Man,
    Plus,
    PromotionButton,
  },
  data: () => ({
    traits: [
      {
        name: 'Rápido',
      },
      {
        name: 'Estable',
      },
      {
        name: 'Seguro',
      },
    ],
  }),
  computed: {
    ...mapGetters('hero', ['getHero']),
  },
  mounted() {
    if (!this.getHero.length) {
      this.fetchHero()
    }
  },
  methods: {
    ...mapActions('hero', ['fetchHero']),
  },
}
</script>

<style scoped>
  .bg-image {
    background-position: center;
    background-size: cover;
  }
</style>
