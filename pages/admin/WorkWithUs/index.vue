<template>
  <app-layout>
    <template v-slot:slotA>
      <app-title title="Trabaja con nosotros" />
    </template>
    <template v-slot:slotB>
      <div class="border border-lightBlue rounded-lg mt-6 p-6">
        <button 
          class="w-full flex justify-between items-center"
          @click="showCard">
          <p class="text-lg font-bold font-primary text-white">
            Crear Vacante
          </p>
          <div class="w-5 h-5 flex justify-center items-center">
            <icons
              :name="arrowDisplay" class="text-yellow font-principal"/>
          </div>
        </button>
        <div v-if="isOpen" class="w-full flex flex-col justify-start mt-6">
          
          <button
            @click="savePlan"
            class="w-28 rounded-lg flex justify-center items-center text-appBackground py-1 mt-4"
            :class="{ 'bg-yellow': isFormValid, 'bg-grey': !isFormValid }">
            Guardar
          </button>
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script>
import axios from 'axios'
import icons from '@/components/global/Icons.vue'
import AppTitle from '~/components/App/components/AppTitle.vue';
import AppLayout from '@/components/App/components/AppLayout.vue'

export default {
  layout: 'app',
  components: {
    icons,
    AppTitle,
    AppLayout
  },
  data: () => ({
    isOpen: false,
    namePlan: '',
    pricePlan: '',
    speedPlan: ''
  }),
   computed: {
    arrowDisplay() {
      return !this.isOpen ? 'arrowDown' : 'close';
    },
    isFormValid() {
      return this.namePlan !== '' && this.pricePlan !== '' && this.speedPlan !== '';
    }
  },
  methods: {
    showCard() {
      this.isOpen = !this.isOpen
    },
    async savePlan() {
      const plan = {
        planName: this.namePlan,
        price: Number(this.pricePlan),
        speed: Number(this.speedPlan)
      }
      console.log(plan)
      const response = await axios.post(`${process.env.NUXT_API}api/plansBoard`, plan)
      console.log(response)
    }
  }
}
</script>