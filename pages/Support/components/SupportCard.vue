<template>
  <button
    class="
      md:w-72 md:h-32
      w-32
      h-32
      flex flex-col
      border-2 border-lightBlue
      justify-center
      items-center
      rounded
    "
  >
    <div class="w-9 h-11">
      <Icons :name="icon" class="text-yellow" />
    </div>
    <p class="text-white text-center mt-3">
      {{ name }}
    </p>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>