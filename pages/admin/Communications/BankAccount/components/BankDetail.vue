<template>
  <div class="w-full flex flex-col md:flex-row justify-between md:p-5">
    <div class="flex md:w-1/4 items-center justify-center mb-3 md:mb-0 w-full">
      <div class="">
        <img :src="url" alt="Logo del banco pichincha" class="" />
      </div>
    </div>
    <div class="flex md:w-1/4 flex-col sm:flex-row items-center justify-center">
      <div>
        <p class="font-semibold text-center text-white font-principal">
          {{ name }}
        </p>
      </div>
    </div>
    <div class="flex md:w-1/4 flex-col sm:flex-row items-center justify-center">
      <div>
        <p class="font-semibold text-center text-white font-principal">
          {{ details }}
        </p>
      </div>
    </div>
    <button class="text-red" v-if="showDeleteButton" @click="deleteBankAccount">
      Borrar
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    showDeleteButton() {
      return this.$route.path == '/admin/communications/BankAccount'
    },
  },
  methods: {
    ...mapActions('banks', ['deleteBank']),
    deleteBankAccount() {
      this.deleteBank(this.id)
    },
  },
}
</script>
