<template>
  <div class="w-full pt-12 pb-5 sm:pb-10 sm:pt-24">
    <warning :isOpen="errorOpen" :getError="errorMessage" @close-warning="errorOpen = false" />
    <success :isOpen="successOpen" :getSuccess="successMessage" @close-success="successOpen = false" />
    <p class="text-white font-principal font-bold text-center text-2xl sm:text-3xl max-w-7xl mx-auto">
      Cambio de titular
    </p>
    <div class="w-4/5 mx-auto flex flex-wrap justify-around items-center max-w-7xl">
      <div class="mt-12 w-full sm:w-5/12">
        <p class="text-white font-principal font-bold text-2xl">
          Titular anterior
        </p>
        <div class="w-full pt-3">
          <p class="mb-1 text-white text-base font-principal font-bold">
            Nombre
          </p>
          <input
            class="background-input border border-lightBlue p-3 text-white font-principal w-full rounded-md outline-none"
            placeholder="Ingresa tu nombre " type="text" v-model="oldName" />
        </div>
        <div class="w-full pt-3">
          <p class="mb-1 text-white text-base font-principal font-bold">
            Apellido
          </p>
          <input
            class="background-input border border-lightBlue p-3 text-white font-principal w-full rounded-md outline-none"
            placeholder="Ingresa tu apellido " type="text" v-model="oldLastName" />
        </div>
        <div class="w-full pt-3">
          <p class="mb-1 text-white text-base font-principal font-bold">
            Cédula
          </p>
          <input
            class="background-input border border-lightBlue p-3 text-white font-principal w-full rounded-md outline-none"
            placeholder="Número de cédula" type="number" v-model="oldIdentification" />
        </div>
      </div>

      <div class="mt-12 w-full sm:w-5/12">
        <p class="text-white font-principal font-bold text-2xl">
          Nuevo titular
        </p>
        <div class="w-full pt-3">
          <p class="mb-1 text-white text-base font-principal font-bold">
            Nombre
          </p>
          <input
            class="background-input border border-lightBlue p-3 text-white font-principal w-full rounded-md outline-none"
            placeholder="Ingresa tu nombre" type="text" v-model="newName" />
        </div>
        <div class="w-full pt-3">
          <p class="mb-1 text-white text-base font-principal font-bold">
            Apellido
          </p>
          <input
            class="background-input border border-lightBlue p-3 text-white font-principal w-full rounded-md outline-none"
            placeholder="Ingresa tu apellido" type="text" v-model="newLastName" />
        </div>
        <div class="w-full pt-3">
          <p class="mb-1 text-white text-base font-principal font-bold">
            Cédula
          </p>
          <input
            class="background-input border border-lightBlue p-3 text-white font-principal w-full rounded-md outline-none"
            placeholder="Número de cédula" type="number" v-model="newIdentification" />
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center items-center mt-9">
      <button class="px-6 py-3 text-base border rounded-md font-principal" :class="isButtonActive"
        :disabled="!validChangeOwner" @click="sendChangeOwnerRequest">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    // OLD DATA USER
    oldName: '',
    oldLastName: '',
    oldIdentification: '',
    // NEW DATA USER
    newIdentification: '',
    newName: '',
    newLastName: '',
    errorOpen: false,
    errorMessage:
      'Por favor, comprueba que tu email, número de cédula sea el correcto ó tu número telefónico',
    successOpen: false,
    successMessage: 'Tú solicitud ha sido enviada con éxito',
  }),
  computed: {
    validChangeOwner() {
      return (
        this.oldIdentification != '' &&
        this.oldName != '' &&
        this.oldLastName != '' &&
        this.newIdentification != '' &&
        this.newName != '' &&
        this.newLastName != ''
      )
    },
    isButtonActive() {
      return this.validChangeOwner === true
        ? 'border-yellow text-white hover:text-black hover:bg-yellow'
        : 'border-grey text-grey'
    },
  },
  methods: {
    resetValues() {
      // OLD DATA USER
      this.oldName = ''
      this.oldLastName = ''
      this.oldIdentification = ''
      // NEW DATA USER
      this.newIdentification = ''
      this.newName = ''
      this.newLastName = ''
    },
    async sendChangeOwnerRequest() {
      try {
        const request = {
          previousOwner: {
            id: this.oldIdentification,
            names: this.oldName,
            lastNames: this.oldLastName,
          },
          newOwner: {
            id: this.newIdentification,
            names: this.newName,
            lastNames: this.newLastName,
          },
        }
        const response = await axios.post(
          `${process.env.NUXT_API}api/changeOwner`,
          request
        )
        this.successOpen = true
        this.resetValues()
      } catch (e) {
        this.errorOpen = true
        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
.background-input {
  background: none;
}
</style>
