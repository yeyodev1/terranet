<template>
  <div class="w-full">
    <form class="flex flex-wrap w-4/5 mx-auto max-w-7xl justify-evenly">
      <!-- RUC SECTION  -->
      <div class="flex flex-col w-full pt-6 sm:w-2/5">
        <label for="RUC" class="text-base font-bold text-white font-principal">
          Ruc.
        </label>
        <input
          id="ruc"
          type="number"
          v-model="ruc"
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
          placeholder="Número de Ruc."
        />
      </div>
      <!-- NAME SECITON  -->
      <div class="flex flex-col w-full pt-6 sm:w-2/5">
        <label for="name" class="text-base font-bold text-white font-principal">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          v-model="name"
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
          v-model="email"
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
          for="cellNumber"
          class="text-base font-bold text-white font-principal"
        >
          Télefono
        </label>
        <input
          id="cellNumber"
          type="number"
          v-model="cellNumber"
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
          placeholder="Número de contácto"
        />
      </div>
    </form>
    <div>
      <p
        class="
          px-5
          mx-auto
          w-full
          lg:w-4/5
          pb-10
          text-2xl
          font-bold
          text-center text-white
          font-principal
          pt-11
        "
      >
        ¿Cuántos dispositivos conectarás a la red?
      </p>
      <div class="flex flex-wrap w-4/5 mx-auto justify-evenly max-w-7xl">
        <div
          class="flex flex-col items-center justify-center px-3 mt-10 sm:mt-0"
        >
          <div>
            <Icons class="w-12 h-8 text-white" :name="laptop" />
          </div>
          <p class="text-base text-center text-white font-principal">
            Computadoras
          </p>
          <input
            type="number"
            class="
              h-12
              px-2
              py-3
              text-center text-white
              border
              rounded-md
              outline-none
              border-yellow
              font-principal
              placeholder:font-principal
              placeholder:text-white
              placeholder:text-base
              background
              w-9
              placeholder:text-center
            "
            v-model="userComputers"
            placeholder="0"
          />
        </div>
        <div
          class="flex flex-col items-center justify-center px-3 mt-10 sm:mt-0"
        >
          <div>
            <Icons class="w-12 h-8 text-white" :name="tabletPhone" />
          </div>
          <p class="text-base text-center text-white font-principal">
            Tablets/<br class="sm:hidden" />Smartphones
          </p>
          <input
            type="number"
            class="
              h-12
              px-2
              py-3
              text-center text-white
              border
              rounded-md
              outline-none
              border-yellow
              font-principal
              placeholder:font-principal
              placeholder:text-white
              placeholder:text-base
              background
              w-9
              placeholder:text-center
            "
            v-model="userSmartDevices"
            placeholder="0"
          />
        </div>
        <div
          class="flex flex-col items-center justify-center px-3 mt-10 sm:mt-0"
        >
          <div>
            <Icons class="w-12 h-8 text-white" :name="television" />
          </div>
          <p class="text-base text-center text-white font-principal">
            Smart TVs
          </p>
          <input
            type="number"
            class="
              h-12
              px-2
              py-3
              text-center text-white
              border
              rounded-md
              outline-none
              border-yellow
              font-principal
              placeholder:font-principal
              placeholder:text-white
              placeholder:text-base
              background
              w-9
              placeholder:text-center
            "
            v-model="userTvs"
            placeholder="0"
          />
        </div>
        <div
          class="
            flex flex-col
            items-center
            justify-center
            px-3
            mt-10
            sm:mt-0 sm:pt-4
            md:pt-0
          "
        >
          <div>
            <Icons class="w-12 h-8 text-white" :name="camera" />
          </div>
          <p class="text-base text-center text-white font-principal">
            Cámaras<br class="sm:hidden" />/otros
          </p>
          <input
            type="number"
            class="
              h-12
              px-2
              py-3
              text-center text-white
              border
              rounded-md
              outline-none
              border-yellow
              font-principal
              placeholder:font-principal
              placeholder:text-white
              placeholder:text-base
              background
              w-9
              placeholder:text-center
            "
            v-model="userCameras"
            placeholder="0"
          />
        </div>
      </div>
      <div class="flex items-center justify-center w-4/5 mx-auto mt-14">
        <input type="checkbox" class="w-5 h-5" />
        <p class="pl-3 text-xs font-principal text-grey">
          Acepto las políticas de privacidad
        </p>
      </div>
      <div class="flex flex-col items-center justify-center w-full">
        <button
          class="
            flex
            items-center
            justify-center
            px-6
            py-3
            mb-6
            text-center text-white
            border
            rounded-md
            font-principal
            mt-9
            border-yellow
            sm:mb-12
          "
          :class="isButtonActive"
          :disabled="!formIsValid"
          @click="sendCorporationRequest"
        >
          Enviar
        </button>
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Icons from '../global/Icons.vue'

export default {
  components: {
    Icons,
  },
  data: () => ({
    ruc: '',
    name: '',
    email: '',
    cellNumber: '',
    // ICONS
    tabletPhone: 'tabletPhone',
    laptop: 'laptop',
    television: 'television',
    camera: 'securityCamera',
    television: 'television',

    //USER DEVICES
    userComputers: '',
    userSmartDevices: '',
    userTvs: '',
    userCameras: '',
    errorOpen: false,
    errorMessage:
      'Por favor, comprueba que hayas llenado todos los campos por favor',
    successOpen: false,
    successMessage: 'Tú solicitud ha sido enviada con éxito',
  }),
  computed: {
    formIsValid() {
      return (
        this.ruc.length > 0 &&
        this.name.length > 0 &&
        this.email.length > 0 &&
        this.cellNumber.length > 0
      )
    },
    isButtonActive() {
      return this.formIsValid
        ? 'border-yellow text-white hover:text-black hover:bg-yellow'
        : 'border-grey text-grey'
    },
  },
  methods: {
    resetValues() {
      this.ruc = ''
      this.name = ''
      this.email = ''
      this.cellNumber = ''
      this.userComputers = 0
      this.userSmartDevices = 0
      this.userTvs = 0
      this.userCameras = 0
    },
    async sendCorporationRequest() {
      try {
        const request = {
          ruc: this.ruc,
          name: this.name,
          phone: this.cellNumber,
          email: this.email,
          devices: {
            computers: this.userComputers,
            tabletsPhones: this.userSmartDevices,
            smartTv: this.userTvs,
            otherDevices: this.userCameras,
          },
        }
        console.log(request)
        const response = await axios.post(
          `${process.env.NUXT_API}api/businessPlan`,
          request
        )
        this.successOpen = true
        this.resetValues()
      } catch (e) {
        console.error(e)
        this.errorOpen = true
      }
    },
  },
}
</script>

<style scoped>
.background {
  background: transparent;
}
</style>
