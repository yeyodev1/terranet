<template>
  <div class="w-full pt-8 pb-8 sm:pt-16 sm:pb-12">
    <p class="mx-auto text-2xl font-bold text-center text-white font-principal sm:text-5xl max-w-7xl">
      Consultar Capacidad
    </p>
    <div class="flex w-4/5 max-w-3xl mx-auto mt-6 border rounded-md md:mt-16 border-lightBlue">
      <div v-if="getCapacity.length" class="w-full p-6">
        <img :src="getCapacity" class="object-cover w-full" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('capacity', ['getCapacity'])
  },
  mounted() {
    if (!this.getCapacity.length) {
      this.fetchCapacity()
    }
  },
  methods: {
    ...mapActions('capacity', ['fetchCapacity'])
  }
}
</script>
