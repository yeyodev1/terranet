<template>
  <app-layout>
    <app-title title="Links de Normativas" class="mt-4" />
    <div class="border border-lightBlue rounded-lg mt-6 p-6">
      <button
        class="w-full flex justify-between items-center"
        @click="showCard"
      >
        <p class="text-lg font-bold font-primary text-white">
          Agregar Links de normativa
        </p>
        <div class="w-5 h-5 flex justify-center items-center">
          <icons :name="arrowDisplay" class="text-yellow font-principal" />
        </div>
      </button>
      <div v-if="isOpen" class="w-full flex flex-col justify-start mt-6">
        <div class="w-full flex flex-col justify-between items-center pl-1">
          <div class="w-full flex justify-start items-center">
            <label class="text-white font-primary text-lg mr-1">Nombre: </label>
            <input
              v-model="linkName"
              placeholder="Ingresa su pregunta"
              type="text"
              class="
                text-white
                outline-none
                w-full
                border-b border-lightBlue
                px-1
                bg-appBackground
              "
            />
          </div>
          <div class="w-full flex justify-start items-start mt-6">
            <label class="text-white font-primary text-lg mr-1"
              >Respuesta:
            </label>
            <input
              v-model="url"
              placeholder="Escribe tu respuesta"
              type="text"
              class="
                text-white
                outline-none
                border-b border-lightBlue
                px-1
                bg-appBackground
                w-full
                h-14
              "
            />
          </div>
        </div>
        <button
          @click="saveQuestion"
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
  </app-layout>
</template>

<script>
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'
import Icons from '@/components/global/Icons.vue'

export default {
  layout: 'app',
  components: {
    AppLayout,
    AppTitle,
    Icons,
  },
  data: () => ({
    linkName: '',
    url: '',
  }),
  computed: {
    arrowDisplay() {
      return !this.isOpen ? 'arrowDown' : 'close'
    },
    isFormValid() {
      return this.linkName !== '' && this.url !== ''
    },
  },
  mounted() {},
  methods: {
    showCard() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>