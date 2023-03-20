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
            <input type="file" class="opacity-0 absolute input-scale" @change="onFileChange" />
          </button>
          <div v-if="Object.keys(file).length" class="w-16 h-16 flex justify-center items-center mt-2">
            <p>
              hey
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
    file: {}
  }),
  computed: {
    ...mapGetters('workWithUs', ['isLoading'])
  },
  methods: {
    ...mapActions('workWithUs', ['sendCv']),
    onFileChange(e) {
      const file = e.target.files[0]
      this.file = file
      if (!file.length) {
        return
      }
    },
    setFile() {
      const fd = new FormData()
      fd.append('capacityFile', this.file)
      this.sendCv(fd)
      this.file = {}
    },
  },
  watch: {
    file(newVal, oldVal) {
      if (Object.keys(newVal).length) {
        setFile()
      }
    }
  }
}
</script>