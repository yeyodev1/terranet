<template>
  <app-layout>
    <template v-slot:A>
      <app-title name="Atención al cliente" />
    </template>
    <template>
      <p
        v-if="getSupportMessages.length"
        class="text-white text-lg text-center w-full"
      ></p>
      <div v-else class="w-full flex flex-col justify-center items-center">
        <div>hola</div>
      </div>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'
export default {
  components: {
    AppLayout,
    AppTitle,
  },
}
</script>