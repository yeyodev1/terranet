<template>
  <div class="w-full pb-6 pt-14 md:pt-24 sm:pb-10">
    <p
      class="text-2xl font-bold text-center text-white font-principal sm:text-3xl max-w-7xl mx-auto"
    >
      Actualizar datos
    </p>
    <!-- CURRENT DATA  -->
    <div class="">
      <div
        class="w-4/5 mx-auto mt-6 border-b sm:mt-14 border-lightBlue max-w-7xl mb-9"
      >
        <p
          class="relative text-base font-bold text-white sm:text-2xl font-principal left-3"
        >
          Datos actuales
        </p>
      </div>
      <div class="flex flex-wrap justify-between w-4/5 mx-auto max-w-7xl">
        <div class="w-full mb-8 sm:w-5/12">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Cédula
          </p>
          <input
            type="number"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="Número de cédula"
            v-model="oldIdentification"
          />
        </div>
        <div class="w-full mb-8 sm:w-5/12">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Nombre
          </p>
          <input
            type="text"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="Nombre completo"
            v-model="oldName"
          />
        </div>
        <div class="w-full mb-8 sm:w-5/12">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Correo
          </p>
          <input
            type="email"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="ejemplo@mail.com"
            v-model="oldEmail"
          />
        </div>
        <div class="w-full mb-8 sm:w-5/12">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Teléfono
          </p>
          <input
            type="number"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="Número de teléfono"
            v-model="oldPhoneNumber"
          />
        </div>
        <div class="w-full mb-8">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Dirección
          </p>
          <input
            type="text"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="Dirección de domicilio"
            v-model="oldAddress"
          />
        </div>
      </div>
    </div>
    <!-- NEW DATA  -->
    <div>
      <div
        class="w-4/5 mx-auto mt-6 border-b sm:mt-14 border-lightBlue max-w-7xl mb-9"
      >
        <p
          class="relative text-base font-bold text-white sm:text-2xl font-principal left-3"
        >
          Nuevos datos
        </p>
      </div>
      <div class="flex flex-wrap justify-between w-4/5 mx-auto max-w-7xl">
        <div class="w-full mb-8 sm:w-5/12">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Cédula
          </p>
          <input
            type="number"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="Número de cédula"
            v-model="newIdentification"
          />
        </div>
        <div class="w-full mb-8 sm:w-5/12">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Nombre
          </p>
          <input
            type="text"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="Nombre completo"
            v-model="newName"
          />
        </div>
        <div class="w-full mb-8 sm:w-5/12">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Correo
          </p>
          <input
            type="email"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="ejemplo@mail.com"
            v-model="newEmail"
          />
        </div>
        <div class="w-full mb-8 sm:w-5/12">
          <p class="pb-1 text-base font-bold text-white font-principal">
            Teléfono
          </p>
          <input
            type="number"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="Número de teléfono"
            v-model="newPhoneNumber"
          />
        </div>
        <div class="w-full mb-8">
          <p class="pb-1 text-base text-white font-principal font-bold">
            Dirección
          </p>
          <input
            type="text"
            class="w-full p-3 text-white border rounded-md outline-none border-lightBlue background-input font-principal"
            placeholder="Dirección de domicilio"
            v-model="newAddress"
          />
        </div>
        <div class="flex items-center justify-center w-full mt-9">
          <button
            class="px-6 py-3 text-base border rounded-md font-principal"
            :class="isButtonActive"
            :disabled="!validNewInfo"
            @click="sendUpdateData"
          >
            Enviar
          </button>
        </div>
      </div>
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    // OLD DATA
    oldIdentification: '',
    oldName: '',
    oldEmail: '',
    oldPhoneNumber: '',
    oldAddress: '',
    // NEW DATA
    newAddress: '',
    newName: '',
    newIdentification: '',
    newEmail: '',
    newPhoneNumber: '',
    newAddress: '',
    errorOpen: false,
    errorMessage:
      'Por favor, comprueba que tu email, número de cédula sea el correcto ó tu número telefónico',
    successOpen: false,
    successMessage: 'Tú solicitud ha sido enviada con éxito',
  }),
  computed: {
    validNewInfo() {
      return (
        this.oldIdentification != '' &&
        this.oldName != '' &&
        this.oldEmail != '' &&
        this.oldPhoneNumber != '' &&
        this.oldAddress != '' &&
        this.newIdentification != '' &&
        this.newName != '' &&
        this.newEmail != '' &&
        this.newPhoneNumber != '' &&
        this.newAddress != ''
      )
    },
    isButtonActive() {
      return this.validNewInfo === true
        ? 'border-yellow text-white hover:text-black hover:bg-yellow'
        : 'border-grey text-grey'
    },
  },
  methods: {
    resetValues() {
      this.oldIdentification = ''
      this.oldName = ''
      this.oldEmail = ''
      this.oldPhoneNumber = ''
      this.oldAddress = ''
      this.newIdentification = ''
      this.newName = ''
      this.newEmail = ''
      this.newPhoneNumber = ''
      this.newAddress = ''
    },
    async sendUpdateData() {
      try {
        const request = {
          previousData: {
            id: this.oldIdentification,
            names: this.oldName,
            phoneNumber: this.oldPhoneNumber,
            email: this.oldEmail,
            address: this.oldAddress,
          },
          newData: {
            id: this.newIdentification,
            names: this.newName,
            phoneNumber: this.newPhoneNumber,
            email: this.newEmail,
            address: this.newAddress,
          },
        }
        const response = await axios.post(
          `${process.env.NUXT_API}api/updateData`,
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
