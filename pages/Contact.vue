<template>
  <div class="w-full pt-12 pb-5 sm:pt-24 sm:pb-10">
    <div class="w-4/5 mx-auto mt-6 sm:mt-14 max-w-7xl mb-9">
      <p
        class="
          text-2xl
          font-bold
          text-center text-white
          sm:text-3xl
          font-principal
        "
      >
        Nos gustaria conocer tu opinion
      </p>
    </div>
    <div
      class="flex flex-wrap justify-between w-4/5 mx-auto max-w-7xl lg:px-14"
    >
      <div class="w-full mb-8 sm:w-5/12">
        <p class="pb-1 text-base font-bold text-white font-principal">Cédula</p>
        <input
          type="text"
          class="
            w-full
            p-3
            text-white
            border
            rounded-md
            outline-none
            border-lightBlue
            background-input
            font-principal
          "
          placeholder="Cédula"
          v-model="ci"
        />
      </div>
      <div class="w-full mb-8 sm:w-5/12">
        <p class="pb-1 text-base font-bold text-white font-principal">
          Nombres
        </p>
        <input
          type="text"
          class="
            w-full
            transparent
            p-3
            text-white
            border
            rounded-md
            outline-none
            border-lightBlue
            background-input
            font-principal
          "
          placeholder="Nombres y Apellidos"
          v-model="name"
        />
      </div>
      <div class="w-full mb-8 sm:w-5/12">
        <p class="pb-1 text-base font-bold text-white font-principal">
          Télefono
        </p>
        <input
          type="number"
          class="
            w-full
            p-3
            text-white
            border
            rounded-md
            outline-none
            border-lightBlue
            background-input
            font-principal
          "
          placeholder="Teléfono"
          v-model="userPhoneNumber"
        />
      </div>
      <div class="w-full mb-8 sm:w-5/12">
        <p class="pb-1 text-base font-bold text-white font-principal">Correo</p>
        <input
          type="email"
          class="
            w-full
            p-3
            text-white
            border
            rounded-md
            outline-none
            border-lightBlue
            background-input
            font-principal
          "
          placeholder="ejemplo@mail.com"
          v-model="userEmail"
        />
      </div>
      <div class="w-full mb-8">
        <p class="pb-1 text-base font-bold text-white font-principal">
          ¿En qué podemos ayudarte?
        </p>
        <textarea
          class="
            w-full
            p-3
            text-white
            border
            rounded-md
            outline-none
            border-lightBlue
            background-input
            font-principal
          "
          placeholder="Quiero saber..."
          v-model="userOpinion"
        />
      </div>
    </div>
    <div class="flex items-center justify-center w-full mt-9">
      <button
        class="px-6 py-3 text-base border rounded-md font-principal"
        :class="isButtonActive"
        :disabled="validOpinion"
        @click="sendSupportRequest"
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
    ci: '',
    name: '',
    userEmail: '',
    userPhoneNumber: '',
    userOpinion: '',
  }),
  computed: {
    validOpinion() {
      return (
        this.ci != '' &&
        this.name != '' &&
        this.userEmail != '' &&
        this.userPhoneNumber != '' &&
        this.userOpinion != ''
      )
    },
    isButtonActive() {
      return this.validOpinion
        ? 'border-yellow text-white hover:text-black hover:bg-yellow'
        : 'border-grey text-grey'
    },
    async sendSupportRequest() {
      const request = {
        userId: this.ci,
        name: this.name,
        phone: this.userPhoneNumber,
        email: this.email,
        message: this.userOpinion,
      }
      const response = await axios.post(
        `${process.env.NUXT_API}api/contactUs`,
        request
      )
      console.log(response)
    },
  },
}
</script>


<style scoped>
.background-input {
  background: none;
}
</style>