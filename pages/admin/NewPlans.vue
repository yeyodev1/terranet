<template>
  <div>
    <div class="w-full mx-auto">
      <p class="text-lg font-bold font-primary border-b border-lightBlue text-white">
        Planes
      </p>
      <div class="border border-lightBlue rounded-lg mt-6 p-6">
        <button 
          class="w-full flex justify-between items-center"
          @click="showCard">
          <p class="text-lg font-bold font-primary text-white">
            Crear Planes
          </p>
          <div class="w-5 h-5 flex justify-center items-center">
            <icons
              :name="arrowDisplay" class="text-yellow font-principal"/>
          </div>
        </button>
        <div v-if="isOpen" class="w-full flex flex-wrap justify-between items-center mt-6 pl-1">
          <div class="w-full lg:w-2/5 flex justify-start items-center">
            <label class="text-white font-primary text-lg mr-1">Nombre: </label>
            <input 
              v-model="namePlan" 
              placeholder="Ingresa el nombre"
              type="text"
              class="text-white outline-none border-b border-lightBlue px-1 bg-appBackground">
          </div>
          <div class="w-1/2 lg:w-1/5 flex justify-start items-center">
            <label class="text-white font-primary text-lg mr-1">Precio: </label>
            <input 
              v-model="pricePlan" 
              placeholder="$ 00.00"
              type="text"
              class="text-white outline-none border-b border-lightBlue w-20 px-1 bg-appBackground">
          </div>
          <div class="w-1/2 lg:w-1/5 flex justify-start items-center">
            <label class="text-white font-primary text-lg mr-1">Velocidad: </label>
            <input 
              v-model="speedPlan" 
              placeholder="00"
              type="text"
              class="text-white outline-none border-b border-lightBlue px-1 bg-appBackground w-9">
          </div>
        </div>
      </div>
    </div>
    <p class="font-primary text-white text-3xl w-full text-center mt-4 font-extralight">
      Aún no se han creado planes
    </p>
  </div>
</template>

<script>
import icons from '@/components/global/Icons.vue'

export default {
  layout: 'app',
  components: {
    icons
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
    }
  },
  methods: {
    showCard() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>