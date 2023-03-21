<template>
  <div class="flex items-center justify-center w-4/5 max-w-6xl mx-auto mt-8 border rounded-md border-lightBlue sm:mt-12">
    <div class="flex items-center justify-center px-5 border rounded-full my-9 w-80 h-80 border-lightBlue py-28">
      <button v-if="!isLoading && !Object.keys(getSpeed).length"
        class="text-4xl text-center text-white uppercase sm:w-80 sm:h-80 sm:text-5xl font-principal" @click="startTest">
        Comenzar
      </button>
      <div v-else-if="!isLoading && Object.keys(getSpeed).length" class="flex justify-center items-center">
        <p class="text-white font-open text-5xl">
          {{ getSpeed.test }}
        </p>
      </div>
      <h2 v-else class="text-white font-open text-3xl">
        ...Cargando
      </h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import testImage from '@/static/Man/Capa2.png';

export default {
  data: () => ({
    image: testImage
  }),
  computed: {
    ...mapGetters('speedometer', ['isLoading', 'getSpeed'])
  },
  methods: {
    ...mapActions('speedometer', ['testNetwork']),
    async startTest() {
      try {
        const response = await fetch(this.image);
        const imageName = 'image.png';
        const blob = await response.blob();

        const file = new File([blob], imageName, { type: blob.type })
        const fd = new FormData()
        fd.append('test', file)
        this.testNetwork(fd)
      } catch (error) {
        console.log('Getting Network Error')
      }
    },
  }
}
</script>
