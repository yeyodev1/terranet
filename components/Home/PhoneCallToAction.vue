<template>
  <div
    class="flex flex-wrap items-center justify-center w-full p-4 pb-12 border-b-2 border-white background-phoneCallToAction"
  >
    <div class="flex flex-col items-center justify-center w-auto max-w-7xl">
      <p class="text-base text-white font-principal sm:text-2xl">
        ¡Vive la experiencia <strong>Terranet!</strong>
      </p>
      <p
        class="pr-10 text-xs font-medium text-white font-principal sm:text-base sm:pr-0 lg:pr-24"
      >
        Deja tu número <br class="sm:hidden lg:flex" />
        y nos comunicaremos contigo
      </p>
    </div>
    <div v-if="!getNumber.length" class="flex flex-wrap max-w-7xl px-4">
      <div class="flex w-full md:w-auto mx-2">
        <div
          class="flex items-end w-full p-1 border border-white rounded-md lg:w-full"
        >
          <p class="text-white">(+593)</p>
          <label for="cellphone-numer">
            <input
              v-model="phoneNumber"
              class="w-auto px-2 text-white background focus:outline-none"
              id="cellphone-numer"
              type="number"
              placeholder="_ _ _ _ _ _ _ _ _"
            />
          </label>
        </div>
      </div>
      <button
        class="p-2 text-xs font-semibold rounded-md lg:px-6 lg:py-3 lg:text-base h-fit font-principal border border-white"
        :class="{
          'text-black bg-yellow': isPhoneNumberValidated,
          'text-white bg-transparent': !isPhoneNumberValidated,
        }"
        :disabled="!isPhoneNumberValidated"
        @click="sendNumber"
      >
        Llámenme
      </button>
    </div>
    <div v-else class="w-auto mx-8 p-4">
      <p class="text-white text-center font-open text-lg">
        Soporte tiene tu número 😉
      </p>
      <p class="text-white text-center font-open text-sm">
        Pronto nos comunicaremos con usted
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    phoneNumber: '',
  }),
  computed: {
    ...mapGetters('phoneNumber', ['getNumber']),
    isNumberAdded() {
      return this.phoneNumber.length
    },
    isPhoneNumberValidated() {
      return this.isNumberAdded > 0 && this.isNumberAdded === 9
    },
  },
  methods: {
    ...mapActions('phoneNumber', ['sendPhoneNumber']),
    sendNumber() {
      const request = {
        phoneNumber: `0${this.phoneNumber}`,
      }
      this.sendPhoneNumber(request)
    },
  },
}
</script>

<style scoped>
.background {
  background: transparent;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.background-phoneCallToAction {
  background-image: url('@/static/Backgrounds/Background-3.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
