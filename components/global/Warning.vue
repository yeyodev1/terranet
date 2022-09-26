<template>
  <div class="w-full">
    <span
      v-if="isOpen"
      class="
        w-full
        flex
        justify-center
        items-center
        py-2
        bg-red
        text-white
        my-4
      "
    >
      {{ getError }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    getError: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeWarning() {
      setTimeout(() => {
        this.$emit('close-warning')
      }, 3500)
    },
  },
  watch: {
    isOpen(value) {
      if (value) {
        this.closeWarning()
      }
    },
  },
}
</script>