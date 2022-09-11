<template>
  <div>
    <div class="w-full mx-auto">
      <p
        class="
          text-lg
          font-bold font-primary
          border-b border-lightBlue
          text-white
        "
      >
        Planes
      </p>
      <div class="border border-lightBlue rounded-lg mt-6 p-6">
        <button
          class="w-full flex justify-between items-center"
          @click="showCard"
        >
          <p class="text-lg font-bold font-primary text-white">Crear Planes</p>
          <div class="w-5 h-5 flex justify-center items-center">
            <icons :name="arrowDisplay" class="text-yellow font-principal" />
          </div>
        </button>
        <div v-if="isOpen" class="w-full flex flex-col justify-start mt-6">
          <div class="w-full flex flex-wrap justify-between items-center pl-1">
            <div class="w-full lg:w-2/5 flex justify-start items-center">
              <label class="text-white font-primary text-lg mr-1"
                >Nombre:
              </label>
              <input
                v-model="namePlan"
                placeholder="Ingresa el nombre"
                type="text"
                class="
                  text-white
                  outline-none
                  border-b border-lightBlue
                  px-1
                  bg-appBackground
                "
              />
            </div>
            <div
              class="
                w-full
                sm:w-1/2
                lg:w-1/5
                flex
                justify-start
                items-center
                mt-2
                lg:mt-0
              "
            >
              <label class="text-white font-primary text-lg mr-1"
                >Precio:
              </label>
              <input
                v-model="pricePlan"
                placeholder="$ 00.00"
                type="text"
                class="
                  text-white
                  outline-none
                  border-b border-lightBlue
                  w-20
                  px-1
                  bg-appBackground
                "
              />
            </div>
            <div
              class="
                w-full
                sm:w-1/2
                lg:w-1/5
                flex
                justify-start
                items-center
                mt-2
                lg:mt-0
              "
            >
              <label class="text-white font-primary text-lg mr-1"
                >Velocidad:
              </label>
              <input
                v-model="speedPlan"
                placeholder="00"
                type="text"
                class="
                  text-white
                  outline-none
                  border-b border-lightBlue
                  px-1
                  bg-appBackground
                  w-9
                "
              />
            </div>
          </div>
          <button
            @click="savePlan"
            class="
              w-28
              rounded-lg
              flex
              justify-center
              items-center
              text-appBackground
              py-1
              mt-4
            "
            :class="{ 'bg-yellow': isFormValid, 'bg-grey': !isFormValid }"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
    <p
      v-if="!getPlans.length"
      class="
        font-primary
        text-white text-3xl
        w-full
        text-center
        mt-4
        font-extralight
      "
    >
      Aún no se han creado planes
    </p>
    <div v-else class="w-full mx-auto flex flex-wrap justify-evenly">
      <div v-for="(plan, i) in getPlans" :key="i" class="w-full sm:w-2/5 mr-4">
        <plan :homePlan="plan" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import icons from '@/components/global/Icons.vue'
import Plan from '~/components/Plans/Plan.vue'

export default {
  layout: 'app',
  components: {
    icons,
    Plan,
  },
  data: () => ({
    isOpen: false,
    namePlan: '',
    pricePlan: '',
    speedPlan: '',
  }),
  mounted() {
    if (!this.getPlans.length) {
      this.fetchPlans()
    }
  },
  computed: {
    ...mapGetters('user', ['getUser']),
    ...mapGetters('plans', ['getPlans']),
    arrowDisplay() {
      return !this.isOpen ? 'arrowDown' : 'close'
    },
    isFormValid() {
      return (
        this.namePlan !== '' && this.pricePlan !== '' && this.speedPlan !== ''
      )
    },
  },
  methods: {
    ...mapActions('plans', ['createPlan', 'fetchPlans']),
    showCard() {
      this.isOpen = !this.isOpen
    },
    async savePlan() {
      const plan = {
        planName: this.namePlan,
        price: Number(this.pricePlan),
        speed: Number(this.speedPlan),
      }
      this.createPlan(plan)
    },
  },
}
</script>