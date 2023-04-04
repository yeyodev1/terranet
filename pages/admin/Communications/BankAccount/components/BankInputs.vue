<template>
  <div>
    <div class="w-full mx-auto">
      <p
        class="text-lg font-bold font-principal border-b border-lightBlue text-white"
      >
        Entidades Bancarias
      </p>
      <div class="w-full flex justify-end items-center my-3">
        <button
          class="rounded-lg flex justify-center items-center text-white border border-lightBlue mt-4 bg-appBackground px-7 py-4 font-bold text-xl"
          @click="openCloseForm"
        >
          Agregar Entidad Bancaria
        </button>
      </div>
      <div class="mx-auto w-4/5" v-if="isOpen">
        <div class="w-full">
          <label class="text-white font-primary text-lg mr-1"
            >Nombre de la entidad</label
          >
          <input
            type="text"
            v-model="nameBank"
            class="w-4/5 text-white outline-none border-b border-lightBlue px-1 bg-appBackground"
          />
        </div>
        <div class="w-full mt-7">
          <label class="text-white font-primary text-lg mr-1"
            >Detalles de la entidad</label
          >
          <input
            type="text"
            v-model="detailsBank"
            class="w-4/5 text-white outline-none border-b border-lightBlue px-1 bg-appBackground"
          />
        </div>
        <BankImage @bank-image="getBankImage" />
        <div v-if="image.length" class="mt-3">
          <img :src="image" alt="" />
        </div>
        <button
          class="w-28 rounded-lg flex justify-center items-center text-appBackground py-1 mt-4"
          :class="{
            'bg-yellow': isFormValid,
            'bg-grey': !isFormValid,
          }"
          :disabled="!isFormValid"
          @click="saveBank"
        >
          Guardar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BankImage from './BankImage.vue'

export default {
  components: { BankImage },
  data: () => ({
    isOpen: false,
    nameBank: '',
    detailsBank: '',
    image: '',
  }),
  computed: {
    isFormValid() {
      return (
        this.nameBank !== '' && this.detailsBank !== '' && this.image !== ''
      )
    },
  },
  methods: {
    ...mapActions('banks', ['createBank']),
    resetForm() {
      this.nameBank = ''
      this.detailsBank = ''
      this.image = ''
    },
    async saveBank() {
      const bank = {
        name: this.nameBank,
        details: this.detailsBank,
        url: this.image,
      }
      this.createBank(bank)
      this.resetForm()
    },
    getBankImage(value) {
      this.image = value
    },
    openCloseForm() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
