<template>
  <div class="w-4/5 mt-6">
    <button class="p-2 border border-lightBlue rounded-lg">
      <div class="flex justify-center items-center w-full">
        <div class="w-5 h-5 flex justify-center items-center">
          <icons name="upload" class="text-white" />
        </div>
        <div>
          <p class="text-white ml-2 text-center">Seleccionar archivo</p>
        </div>
      </div>
      <input
        type="file"
        class="w-full h-full opacity-0 bg-white"
        @change.prevent="onFileChange"
      />
    </button>

    <div v-if="imageUrl.length" class="mt-6 rounded-sm">
      <img :src="imageUrl" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    file: {},
    name: '',
    imageUrl: '',
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
        this.imageUrl = response.data.url
        this.$emit('bank-image', this.imageUrl)
        this.file = {}
      } catch (error) {
        console.error('CANNOT_SEND_BANK_IMAGE')
      }
    },
    async setFile(file) {
      try {
        const fd = new FormData()
        fd.append('image', file)
        const result = await this.sendBankImage(fd)
        return result
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
