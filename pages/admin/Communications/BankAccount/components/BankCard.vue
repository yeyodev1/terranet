<template>
  <div class="w-full mt-8">
    <div
      v-for="(bank, index) in getBanks"
      :key="index"
      class="w-full border border-lightBlue rounded-2xl flex flex-row justify-center items-center mt-5"
    >
      <bank-detail
        :name="bank.name"
        :details="bank.details"
        :url="bank.url"
        :id="bank._id"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BankDetail from './BankDetail.vue'
export default {
  components: { BankDetail },

  computed: {
    ...mapGetters('banks', ['getBanks']),
  },
  mounted() {
    if (!this.getBanks.length) {
      this.fetchBanks()
    }
  },
  methods: {
    ...mapActions('banks', ['fetchBanks']),
  },
}
</script>
