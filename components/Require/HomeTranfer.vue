<template>
  <div class="w-full pt-10 sm:pt-12 lg:pt-24 pb-10">
    <p class="text-white font-principal font-bold text-2xl text-center">
      Solicitar traslados
    </p>
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
      class="
        flex flex-col
        w-4/5
        max-w-7xl
        justify-center
        md:items-start
        items-center
        mx-auto
        md:px-6
      "
    >
      <!-- NUMBER OF IDENTIFICATION CARD OF CUSTOMER  -->
      <div class="flex flex-col w-full mt-10 sm:mt-12 max-w-xs">
        <p
          class="
            text-white text-left
            font-principal font-bold
            text-sm
            sm:text-base
            mb-1
          "
        >
          Cédula del titular
        </p>
        <input
          v-model="numberIdentification"
          type="number"
          placeholder="Número de cédula"
          class="
            p-3
            border border-lightBlue
            rounded-md
            background-input
            outline-none
            text-white
          "
        />
      </div>
      <!-- CURRENTLY ADDRESS OF CUSTOMER  -->
      <div class="flex flex-col w-full mt-10 sm:mt-12 max-w-4xl">
        <p
          class="
            text-white text-left
            font-principal font-bold
            text-sm
            sm:text-base
            mb-1
          "
        >
          Dirección actual
        </p>
        <input
          v-model="currentAddress"
          type="text"
          placeholder="Alborada mz10 vll29"
          class="
            p-3
            border border-lightBlue
            rounded-md
            background-input
            outline-none
            text-white
          "
        />
      </div>
      <!-- NEW ADDRESS OF CUSTOMER  -->
      <div class="flex flex-col w-full mt-10 sm:mt-12 max-w-4xl">
        <p
          class="
            text-white text-left
            font-principal font-bold
            text-sm
            sm:text-base
            mb-1
          "
        >
          Dirección de nuevo domicilio
        </p>
        <input
          v-model="newAddress"
          type="text"
          placeholder="Nuevo domicilio..."
          class="
            p-3
            border border-lightBlue
            rounded-md
            background-input
            outline-none
            text-white
          "
        />
      </div>
      <!-- REFERENCE OF NEW ADDRESS -->
      <div class="flex flex-col w-full mt-10 sm:mt-12 max-w-4xl">
        <p
          class="
            text-white text-left
            font-principal font-bold
            text-sm
            sm:text-base
            mb-1
          "
        >
          Referencia del nuevo domicilio
        </p>
        <input
          v-model="referenceNewAdress"
          type="text"
          placeholder="Casa rosada con portón"
          class="
            p-3
            border border-lightBlue
            rounded-md
            background-input
            outline-none
            text-white
          "
        />
      </div>
      <div class="mt-14">
        <button
          class="px-6 py-3 text-base border rounded-md font-principal"
          :disabled="!validateTraslade"
          :class="isButtonActive"
          @click="sendTransferRequest"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    numberIdentification: '',
    currentAddress: '',
    newAddress: '',
    referenceNewAdress: '',
    errorOpen: false,
    errorMessage:
      'Por favor, comprueba que tu email, número de cédula sea el correcto ó tu número telefónico',
    successOpen: false,
    successMessage: 'Tú solicitud ha sido enviada con éxito',
  }),
  computed: {
    validateTraslade() {
      return (
        this.numberIdentification != '' &&
        this.currentAddress != '' &&
        this.newAddress != '' &&
        this.referenceNewAdress != ''
      )
    },
    // VALIDATING TRASLADE WITH CLASSES
    isButtonActive() {
      return this.validateTraslade === true
        ? 'border-yellow text-white hover:text-black hover:bg-yellow'
        : 'border-grey text-grey'
    },
  },
  methods: {
    resetValues() {
      this.numberIdentification = ''
      this.currentAddress = ''
      this.newAddress = ''
      this.referenceNewAdress = ''
    },
    async sendTransferRequest() {
      try {
        const request = {
          idUser: this.numberIdentification,
          address1: this.currentAddress,
          address2: this.newAddress,
          reference: this.referenceNewAdress,
        }
        const response = await axios.post(
          `${process.env.NUXT_API}api/homeTransferReq`,
          request
        )
        this.successOpen = true
        this.resetValues()
      } catch (e) {
        this.errorOpen = true
        console.log(e)
      }
    },
  },
}
</script>

<style scoped>
.background-input {
  background: none;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
