<template>
  <div class="w-full">
    <span v-if="isOpen" class="w-full flex justify-center items-center py-2 bg-green text-white my-4">
      {{ getSuccess }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    getSuccess: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeSuccess() {
      setTimeout(() => {
        this.$emit('close-success')
      }, 2500);
    }
  },
  watch: {
    isOpen(value) {
      if(value) {
        this.closeSuccess()
      }
    }
  }
}
</script>