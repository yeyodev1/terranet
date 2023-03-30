<template>
  <div class="w-auto">
    <div class="w-full flex flex-col justify-start mt-6">
      <div class="w-full flex flex-col justify-between items-center pl-1">
        <div class="relative w-full flex flex-col justify-center items-start">
          <label class="text-white font-primary text-lg mb-3">Subir CV
          </label>
          <button class="relative p-2 border border-lightBlue rounded-lg">
            <div class="mock flex justify-start items-center w-full">
              <div class="w-5 h-5 flex justify-center items-center">
                <icons name="upload" class="text-white" />
              </div>
              <p class="text-white ml-2">
                Seleccionar archivo
              </p>
            </div>
            <input type="file" class="w-full opacity-0 absolute input-scale" @change.prevent="onFileChange" />
          </button>
          <div v-if="name.length" class="w-auto h-16 flex justify-center items-center ">
            <p class="w-auto text-white font-open text-lg">
              {{ name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    file: {},
    name: ''
  }),
  computed: {
    ...mapGetters('workWithUs', ['isLoading'])
  },
  methods: {
    ...mapActions('workWithUs', ['sendCv']),
    async onFileChange(e) {
      try {
        const file = e.target.files[0]
        this.name = file.name
        this.file = file
        const response = await this.setFile(file)
        this.$emit('image-response', response.data)
        this.file = {}
      } catch (error) {
        console.error('CANNOT_SEND_CV')
      }
    },
    async setFile(file) {
      try {
        const fd = new FormData()
        fd.append('cvFile', file)
        const result = await this.sendCv(fd)
        return result
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style scoped>
.input-scale {
  transform: scale(1);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
}
</style>