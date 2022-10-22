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
          <div class="w-full flex flex-wrap justify-between items-center pl-1">
            <div class="w-full flex justify-start items-start">
              <label class="text-white font-primary text-lg mr-1">Título: </label>
              <input 
                v-model="jobTitle" 
                placeholder="Ingresa el nombre"
                type="text"
                class="w-full text-white outline-none border-b border-lightBlue px-1 bg-appBackground">
            </div>
            <div class="w-full lg:w-1/2 flex flex-col justify-start items-start mt-4">
              <label class="text-white font-primary text-lg mr-1">Descripción: </label>
              <textarea 
                v-model="jobDescription" 
                placeholder="Descripcion"
                type="text"
                class="w-full lg:w-3/4 text-white outline-none border-b border-lightBlue px-1 bg-appBackground" />
            </div>
            <div class="w-full lg:w-1/2 flex flex-col justify-start items-start mt-4">
              <label class="text-white font-primary text-lg mr-1">Requesitos: </label>
              <input
                v-model="jobRequirements"
                @keyup.enter="getRequirement" 
                placeholder="Requisito"
                type="text"
                class="w-full lg:w-3/4 text-white outline-none border-b border-lightBlue px-1 bg-appBackground mt-6" />
            </div>
            <div class="w-full flex justify-start items-baseline mt-3">
              <p class="text-white mr-2">
                Requisitos:
              </p>
              <div v-if="requirements.length" class="w-full flex flex-wrap mt-3">
                <div
                  v-for="(requirement, i) in requirements"
                  :key="i"
                  class="flex items-center bg-grey px-1 rounded-full mr-2 mt-2">
                  <span
                    class="text-appBackground mr-1"
                    >{{ requirement }}
                  </span>
                  <button
                    @click="removeRequirement(i)"
                    class="rounded-full bg-red w-3 h-3">
                    <icons name="close" class="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            @click="saveVacancy"
            class="w-28 rounded-lg py-1 px-2 flex justify-center items-center text-appBackground mt-6"
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
    jobTitle: '',
    jobDescription: '',
    jobRequirements: '',
    requirements: [],
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
    resetValues() {
      this.jobTitle = ''
      this.jobDescription = ''
      this.jobRequirements = ''
      this.requirements = ''
    },
    getRequirement() {
      this.requirements.push(this.jobRequirements)
      this.jobRequirements = ''
    },
    removeRequirement(i) {
      this.requirements.splice(i, 1)
    },
    async saveVacancy() {
      const vacancy = {
        jobVacancy: this.jobTitle,
        jobDescription: this.jobDescription,
        jobRequirements: this.requirements
      }
      const response = await axios.post(`${process.env.NUXT_API}api/jobVacs`, vacancy)
      this.resetValues()
    }
  }
}
</script>