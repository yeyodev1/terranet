<template>
  <app-layout>
    <app-title title="Contratación y pagos" class="mt-4" />
    <div class="my-2 w-full flex flex-col justify-between items-start">
      <div class="flex justify-center items-center">
        <p class="text-white font-light mr-2">Busca cliente</p>
        <div class="w-40 border border-yellow rounded-lg mr-2 px-2 py-1">
          <input
            v-model="ci"
            placeholder="Ingresa CI."
            type="text"
            class="bg-appBackground w-full outline-none text-white"
          />
        </div>
        <button
          class="
            w-8
            h-8
            p-1
            flex
            justify-center
            items-center
            bg-yellow
            rounded-md
          "
        >
          <icons name="search" class="text-appBackground" />
        </button>
      </div>
      <div class="flex flex-col justify-center items-start mt-2">
        <button
          class="
            relative
            p-1
            border border-lightBlue
            rounded-lg
            flex
            items-center
          "
        >
          <div
            v-if="!filename.length"
            class="mock flex justify-start items-center"
          >
            <div class="w-5 h-5 flex justify-center items-center">
              <icons name="upload" class="text-white" />
            </div>
            <p class="text-white ml-2">Subir Excel</p>
          </div>
          <p v-else class="text-white">
            {{ filename }}
          </p>
          <input
            type="file"
            class="opacity-0 input-scale"
            @change="onFileChange"
          />
        </button>
      </div>
      <button
        class="
          flex
          mt-2
          justify-center
          items-center
          bg-yellow
          py-1
          px-2
          rounded-md
        "
        :class="{ 'bg-yellow': isFileValid, 'bg-grey': !isFileValid }"
        :disabled="!isFileValid"
        @click="uploadFile"
      >
        Cargar archivo
      </button>
    </div>
    <div class="w-full mt-6 border border-lightBlue rounded-lg py-2">
      <table class="w-full rounded-lg">
        <thead class="border-b border-lightBlue mb-2">
          <tr>
            <th class="text-white">Cédula</th>
            <th class="text-white">Cliente</th>
            <th class="text-white">Fecha de corte</th>
            <th class="text-white">Valor</th>
            <th class="text-white">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr class="mb-4">
            <th class="text-white">Cédula</th>
            <th class="text-white">Cliente</th>
            <th class="text-white">Fecha de corte</th>
            <th class="text-white">Valor</th>
            <th class="text-white">Estado</th>
          </tr>
          <tr class="mb-2">
            <th class="text-white">Cédula</th>
            <th class="text-white">Cliente</th>
            <th class="text-white">Fecha de corte</th>
            <th class="text-white">Valor</th>
            <th class="text-white">Estado</th>
          </tr>
        </tbody>
      </table>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'

export default {
  layout: 'app',
  components: {
    AppLayout,
    AppTitle,
  },
  data: () => ({
    ci: '',
    file: '',
    filename: '',
  }),
  computed: {
    isFileValid() {
      return this.file !== String
    },
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files ? e.target.files[0] : ''
      this.file = file
    },
    uploadFile() {
      console.log('estamos ejecutando')
    },
  },
}
</script>

<style scoped>
.mock {
  position: absolute;
  z-index: 3;
  pointer-events: none;
  cursor: pointer;
}
</style>