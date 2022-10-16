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
            <label class="text-white font-primary text-lg mr-1">URL: </label>
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
              "
            />
          </div>
        </div>
        <button
          @click="saveRule"
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
          :disabled="!isFormValid"
          :class="{ 'bg-yellow': isFormValid, 'bg-grey': !isFormValid }"
        >
          Guardar
        </button>
      </div>
    </div>
    <div
      v-if="getRules.length"
      class="
        w-full
        flex flex-col
        justify-center
        items-center
        mt-4
        p-4
        border border-lightBlue
      "
    >
      <div
        class="flex justify-between items-center w-full border-b border-grey"
      >
        <p class="text-white text-sm md:text-base font-bold">Documento</p>
        <div class="flex justify-center items-center">
          <p class="text-white font-bold text-sm md:text-base mr-4">
            Enlace Web
          </p>
          <p class="text-white font-bold text-sm md:text-base mr-4">Acciones</p>
        </div>
      </div>
      <div
        v-for="(rule, index) in getRules"
        :key="index"
        class="mt-4 mb-2 flex justify-between items-center w-full"
      >
        <p class="text-white text-sm text-left break-normal">{{ rule.name }}</p>
        <div class="flex justify-center items-center w-2/5 md:w-1/5">
          <button
            target="_blank"
            class="w-5 h-5 mx-auto mr-8"
            @click="goTo(rule.url)"
          >
            <icons name="link" class="text-yellow" />
          </button>
          <button class="w-5 h-5 mx-auto" @click="deleteRule(rule._id)">
            <icons name="delete" class="text-yellow" />
          </button>
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    isOpen: false,
    linkName: '',
    url: '',
  }),
  computed: {
    ...mapGetters('rulesLinks', ['getRules']),
    arrowDisplay() {
      return !this.isOpen ? 'arrowDown' : 'close'
    },
    isFormValid() {
      return this.linkName !== '' && this.url !== ''
    },
  },
  mounted() {
    if (!this.getRules.length) {
      this.fetchRules()
    }
  },
  methods: {
    ...mapActions('rulesLinks', ['setRule', 'fetchRules', 'removeRule']),
    showCard() {
      this.isOpen = !this.isOpen
    },
    resetValues() {
      this.url = ''
      this.linkName = ''
    },
    saveRule() {
      const request = {
        url: this.url,
        name: this.linkName,
      }
      this.setRule(request)
      this.resetValues()
    },
    deleteRule(id) {
      this.removeRule(id)
    },
    goTo(link) {
      window.open(link, '_blank')
    },
  },
}
</script>