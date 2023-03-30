<template>
  <div class="w-full flex flex-col justify-start items-center mb-3">
    <p class="w-full text-yellow font-open text-lg">
      {{ email.subject }}
    </p>
    <div class="w-full flex justify-start items-center gap-3">
      <input v-model="email.email" type="text"
        class="background-input border border-lightBlue p-3 text-white font-principal w-64 rounded-md outline-none">
      <button class="w-5 h-5 flex justify-center items-center" @click="updateEmail">
        <icons name="upload" class="text-yellow" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateEmail() {
      this.$emit('email-changed', this.email)
    }
  },
}
</script>

<style scoped>
.background-input {
  background: transparent;
}
</style>