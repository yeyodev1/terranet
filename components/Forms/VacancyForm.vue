<template>
  <form class="flex flex-wrap w-4/5 max-w-7xl justify-between">
     <!-- NAME SECTION  -->
     <div class="flex flex-col w-full pt-6 sm:w-2/5">
        <label for="name" class="text-base font-bold text-white font-principal">
          Nombre
        </label>
        <input
          id="name"
          type="number"
          v-model="applicant.name"
          required
          class="
            px-3
            py-3
            text-white
            border
            rounded-md
            outline-none
            border-yellow
            placeholder:text-grey
            background
          "
          placeholder="Jhon Doe"
        />
      </div>
      <!-- LASTNAME SECITON  -->
      <div class="flex flex-col w-full pt-6 sm:w-2/5">
        <label for="lastname" class="text-base font-bold text-white font-principal">
          Apellido
        </label>
        <input
          id="lastname"
          type="text"
          v-model="applicant.lastname"
          required
          class="
            px-3
            py-3
            text-white
            border
            rounded-md
            outline-none
            border-yellow
            placeholder:text-grey
            background
          "
          placeholder="Nombre de contácto"
        />
      </div>
      <!-- EMAIL SECTION  -->
      <div class="flex flex-col w-full pt-6 sm:w-2/5">
        <label
          for="email"
          class="text-base font-bold text-white font-principal"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          v-model="applicant.email"
          required
          class="
            px-3
            py-3
            text-white
            border
            rounded-md
            outline-none
            border-yellow
            placeholder:text-grey
            background
          "
          placeholder="Ejemplo@mail.com"
        />
      </div>
      <!-- CELLPHONE SECTION  -->
      <div class="flex flex-col w-full pt-6 sm:w-2/5">
        <label
          for="address"
          class="text-base font-bold text-white font-principal"
        >
          Dirección
        </label>
        <input
          id="address"
          type="text"
          v-model="applicant.address"
          required
          class="
            px-3
            py-3
            text-white
            border
            rounded-md
            outline-none
            border-yellow
            placeholder:text-grey
            background
          "
          placeholder="Dirección de domicilio"
        />
      </div>
      <div class="flex w-full pt-6">
        <button
          class="mt-12 mr-4 rounded-lg py-1 px-2 text-white border border-white"
          @click="$emit('close-form')">
          Cerrar
        </button>
        <button
          class="mt-12 rounded-lg py-1 px-2 text-appBackground"
          :class="{'bg-yellow': formIsValid, 'bg-grey': !formIsValid}"
          :disabled="!formIsValid"
          @prevent.click="sendApplications">
          Enviar 
        </button>
      </div>
  </form>
</template>

<script>
import { emailValidation } from '~/helpers/validation';

export default {
  data: () => ({
    applicant: {
      name: '',
      lastname: '',
      email: '',
      address: ''
    }
  }),
  computed: {
    formIsValid() {
      return !this.applicant.name.length && !this.applicant.lastname.length && !this.emailIsValid.length && !this.applicant.address.length
    },
    emailIsValid() {
      return this.applicant.email.length ? this.validatingEmail() : ''
    },
  },
  methods: {
    resetValues() {
      this.applicant = {
        name: '',
        lastname: '',
        email: '',
        address: ''
      }
    },
    validatingEmail() {
      return !emailValidation(this.applicant.email) ? 'Ingresa un correo válido' : ''
    },
    sendApplications() {
      console.log(this.applicant)
      this.$emit('application-form', this.applicant)
    }
  }
}
</script>

<style scoped>
.background {
  background: transparent;
}
</style>