<template>
  <div>
    <button class="p-2 border border-lightBlue rounded-lg">
      <div class="flex justify-start items-center w-full">
        <div class="w-5 h-5 flex justify-center items-center">
          <icons name="upload" class="text-white" />
        </div>
        <p class="text-white ml-2">Seleccionar archivo</p>
      </div>
      <input
        type="file"
        class="w-full h-full opacity-0 bg-white"
        @change.prevent="onFileChange"
      />
    </button>
    <div
      v-if="name.length"
      class="w-auto h-16 flex justify-center items-center"
    >
      <p class="w-auto text-white font-open text-lg">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    file: {},
    name: '',
  }),
  computed: {
    ...mapGetters('bankImage', ['isLoading']),
  },
  methods: {
    ...mapActions('bankImage', ['sendBankImage']),
    async onFileChange(e) {
      try {
        const file = e.target.files[0]
        this.name = file.name
        this.file = file
        const response = await this.setFile(file)
        this.$emit('image-response', response.data)
        this.file = {}
      } catch (error) {
        console.error('CANNOT_SEND_BANK_IMAGE')
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
