<template>
  <div class="w-full">
    <BankInputs />
    <BankCard />
  </div>
</template>

<script>
import BankCard from './components/BankCard.vue'
import BankInputs from './components/BankInputs.vue'
export default {
  components: {
    BankCard,
    BankInputs,
  },
  layout: 'app',
}
</script>
