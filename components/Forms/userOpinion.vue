<template>
  <div class="w-full pt-12 pb-5 sm:pt-24 sm:pb-10">
    <div class="w-4/5 mx-auto mt-6 sm:mt-14 max-w-7xl mb-9">
      <p
        class="text-2xl font-bold text-center text-white sm:text-3xl font-principal"
      >
        Nos gustaría conocer tu opinión
      </p>
    </div>
    <warning
      :isOpen="errorOpen"
      :getError="errorMessage"
      @close-warning="errorOpen = false"
    />
    <success
      :isOpen="successOpen"
      :getSuccess="successMessage"
      @close-success="successOpen = false"
    />
    <div
      class="flex flex-wrap justify-between w-4/5 mx-auto max-w-7xl lg:px-14"
    >
      <div class="w-full mb-8 sm:w-5/12">
        <p class="pb-1 text-base font-bold text-white font-principal">Nombre</p>
        <input
          type="text"
          class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
          placeholder="Nombre"
          v-model="userName"
        />
      </div>
      <div class="w-full mb-8 sm:w-5/12">
        <p class="pb-1 text-base font-bold text-white font-principal">
          Apellido
        </p>
        <input
          type="text"
          class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
          placeholder="Apellido"
          v-model="userLastName"
        />
      </div>
      <div class="w-full mb-8 sm:w-5/12">
        <p class="pb-1 text-base font-bold text-white font-principal">
          Teléfono
        </p>
        <input
          type="number"
          class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
          placeholder="Teléfono"
          v-model="userPhoneNumber"
        />
      </div>
      <div class="w-full mb-8 sm:w-5/12">
        <p class="pb-1 text-base font-bold text-white font-principal">Correo</p>
        <input
          type="email"
          class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
          placeholder="ejemplo@mail.com"
          v-model="userEmail"
        />
      </div>
      <div class="w-full mb-8">
        <p class="pb-1 text-base font-bold text-white font-principal">
          ¿Qué nos puedes decir de Terranet?
        </p>
        <textarea
          class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
          placeholder="Quiero saber..."
          v-model="userOpinion"
        />
      </div>
    </div>
    <div class="flex items-center justify-center w-full mt-9">
      <button
        class="px-6 py-3 text-base border rounded-md font-principal"
        :class="isButtonActive"
        :disabled="!validOpinion"
        @click="sendRecommendations"
      >
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    userName: '',
    userLastName: '',
    userEmail: '',
    userPhoneNumber: '',
    userOpinion: '',
    errorOpen: false,
    errorMessage:
      'Por favor, comprueba que tu email, número de cédula sea el correcto ó tu número telefónico',
    successOpen: false,
    successMessage: 'Tú solicitud ha sido enviada con éxito',
  }),
  computed: {
    validOpinion() {
      return (
        this.userName != '' &&
        this.userLastName != '' &&
        this.userEmail != '' &&
        this.userPhoneNumber != '' &&
        this.userOpinion != ''
      )
    },
    isButtonActive() {
      return this.validOpinion === true
        ? 'border-yellow text-white hover:text-black hover:bg-yellow'
        : 'border-grey text-grey'
    },
  },
  methods: {
    resetValues() {
      this.userName = ''
      this.userLastName = ''
      this.userEmail = ''
      this.userPhoneNumber = ''
      this.userOpinion = ''
    },
    async sendRecommendations() {
      try {
        const request = {
          names: this.userName,
          lastNames: this.userLastName,
          phone: this.userPhoneNumber,
          email: this.userEmail,
          message: this.userOpinion,
        }
        const response = await axios.post(
          `${process.env.NUXT_API}api/recommendations`,
          request
        )
        this.successOpen = true
        this.resetValues()
      } catch (e) {
        this.errorOpen = true
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
