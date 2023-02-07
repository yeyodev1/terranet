<template>
    <div class="w-full">
      <Questions />
      <Benefits />
      <PhoneCallToAction />
    </div>
  </template>
  
  <script>
  import Benefits from '~/components/Home/Benefits.vue'
  import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
  import Questions from '~/components/FrequentQuestions/Questions.vue'
  export default {
    components: { Benefits, PhoneCallToAction, Questions },
  }
  </script>
  