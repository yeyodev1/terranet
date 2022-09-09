<template>
  <div class="w-full mx-auto">
    <p class="text-lg font-bold font-primary border-b border-lightBlue text-white">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>