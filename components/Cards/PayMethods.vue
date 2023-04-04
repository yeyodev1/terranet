<template>
  <div class="flex flex-col items-center justify-center w-full">
    <div
      class="flex flex-col items-center justify-center w-4/5 px-24 pt-8 mt-8 border-b md:justify-evenly max-w-7xl background pb-7"
    >
      <div
        v-for="(bank, index) in getBanks"
        :key="index"
        :class="{ 'border-none': bank === lastBank }"
        class="flex flex-col items-center justify-center w-full pb-6 border-b md:flex-row border-lightBlue pt-7"
      >
        <BankCard
          :name="bank.name"
          :details="bank.details"
          :url="bank.url"
          :id="bank._id"
        />
      </div>
    </div>

    <div class="w-4/5 mt-3 mb-10 max-w-7xl">
      <p class="text-yellow text-lg lg:text-xl">Importante</p>
      <p class="text-base text-white font-principal">
        Envíanos tu comprobante de pago al WhatsApp +593969001683
      </p>
      <p class="text-base text-white font-principal">
        Realiza el pago de tus planes cada mes
      </p>
    </div>
    <div class="w-full flex justify-center mb-4">
      <button
        class="p-2 text-xs font-semibold rounded-md text-black bg-yellow lg:px-6 lg:py-3 lg:text-base h-fit font-principal mx-auto"
        @click="redirectToPay"
      >
        Paga en línea ahora
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BankCard from '~/pages/admin/Communications/BankAccount/components/BankDetail.vue'
export default {
  components: {
    BankCard,
  },
  computed: {
    ...mapGetters('banks', ['getBanks']),
    lastBank() {
      return this.getBanks[this.getBanks.length - 1]
    },
  },
  mounted() {
    if (!this.getBanks.length) {
      this.fetchBanks()
    }
  },
  methods: {
    ...mapActions('banks', ['fetchBanks']),
    redirectToPay() {
      this.$router.push('/payplan')
    },
  },
}
</script>

<style scoped>
.background {
  background: linear-gradient(
    155.02deg,
    rgba(250, 251, 255, 0.4) 0.55%,
    rgba(250, 251, 255, 0.190022) 20.21%,
    rgba(250, 251, 255, 0.124771) 34.02%,
    rgba(250, 251, 255, 0.0654234) 44.23%,
    rgba(250, 251, 255, 0.02) 75.4%
  );
  border-radius: 8px;
}
</style>
