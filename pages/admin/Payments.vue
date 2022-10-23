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
          @click="searchByCi(ci)"
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
            w-full
            max-w-xs
          "
        >
          <div class="mock flex justify-start items-center">
            <div class="w-5 h-5 flex justify-center items-center">
              <icons name="upload" class="text-white" />
            </div>
            <p class="text-white ml-2">Subir Excel</p>
          </div>
          <input
            type="file"
            class="opacity-0 input-scale w-full"
            @change="onFileChange"
          />
        </button>
      </div>
      <p v-if="filename.length" class="my-3 text-white font-open">
        {{ filename }}
      </p>
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
    <div class="w-full flex my-2 justify-end items-center">
      <button
        v-if="Object.keys(getCustomerResult).length"
        class="bg-red rounded-lg text-white py-1 px-2"
        @click="clearSearch"
      >
        Limpiar búsqueda
      </button>
    </div>
    <div
      v-if="Object.keys(getCustomers).length"
      class="w-full mt-6 border border-lightBlue rounded-lg py-2"
    >
      <table class="w-full rounded-lg">
        <thead class="border-b border-lightBlue mb-2">
          <tr>
            <th class="text-white">Cédula</th>
            <th class="text-white hidden md:table-cell">Cliente</th>
            <th class="text-white hidden lg:table-cell">Fecha de corte</th>
            <th class="text-white hidden md:table-cell">Valor</th>
            <th class="text-white">Estado</th>
            <th class="text-white table-cell md:hidden">Detalle</th>
          </tr>
        </thead>
        <tbody v-if="!Object.keys(getCustomerResult).length">
          <tr
            v-for="(customer, index) in getCustomers"
            :key="index"
            class="mb-4"
          >
            <th class="text-white text-sm font-light py-3 px-1">
              {{ customer.ci }}
            </th>
            <th
              class="
                text-white text-sm
                font-light
                py-3
                px-1
                hidden
                md:table-cell
              "
            >
              {{ customer.names }} {{ customer.lastNames }}
            </th>
            <th
              class="
                text-white text-sm
                font-light
                py-3
                px-1
                hidden
                lg:table-cell
              "
            >
              {{ formattingDate(customer.cutOffDate) }}
            </th>
            <th
              class="
                text-white text-sm
                font-light
                py-3
                px-1
                hidden
                md:table-cell
              "
            >
              {{ customer.value }}
            </th>
            <th class="text-white text-sm font-light py-3 px-1">
              {{ hasPayed(customer.paymendDone) }}
            </th>
            <th class="text-white table-cell md:hidden">
              <button
                class="w-5 h-5 rounded-full bg-appBackground"
                @click="getSelectedCustomer(customer)"
              >
                <icons name="edit" class="text-yellow" />
              </button>
            </th>
          </tr>
        </tbody>
        <tbody v-else>
          <tr class="mb-4">
            <th class="text-white text-sm font-light py-3 px-1">
              {{ getCustomerResult.ci }}
            </th>
            <th
              class="
                text-white text-sm
                font-light
                py-3
                px-1
                hidden
                md:table-cell
              "
            >
              {{ getCustomerResult.names }} {{ getCustomerResult.lastNames }}
            </th>
            <th
              class="
                text-white text-sm
                font-light
                py-3
                px-1
                hidden
                lg:table-cell
              "
            >
              {{ formattingDate(getCustomerResult.cutOffDate) }}
            </th>
            <th
              class="
                text-white text-sm
                font-light
                py-3
                px-1
                hidden
                md:table-cell
              "
            >
              {{ getCustomerResult.value }}
            </th>
            <th class="text-white text-sm font-light py-3 px-1">
              {{ hasPayed(getCustomerResult.paymendDone) }}
            </th>
            <th class="text-white table-cell md:hidden">
              <button
                class="w-5 h-5 rounded-full bg-appBackground"
                @click="getSelectedCustomer(getCustomerResult)"
              >
                <icons name="edit" class="text-yellow" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-if="Object.keys(getPagination).length"
      class="w-full px-2 my-2 flex justify-center items-center"
    >
      <button
        class="
          w-8
          h-8
          mr-2
          flex
          justify-center
          items-center
          rounded-lg
          shadow-md
        "
        :class="{
          'bg-yellow': getPagination.hasPrev,
          'bg-grey': !getPagination.hasPrev,
        }"
        :disabled="!getPagination.hasPrev"
        @click="prevOrNext(getPagination.previous)"
      >
        <icons name="previousPage" class="text-appBackground" />
      </button>
      <div
        class="
          w-8
          h-8
          bg-yellow
          mr-2
          flex
          justify-center
          items-center
          shadow-md
          rounded-lg
        "
      >
        <p class="text-appBackground">
          {{ getPagination.page }}
        </p>
      </div>
      <button
        class="w-8 h-8 mr-2 flex justify-center rounded-lg shadow-md"
        :class="{
          'bg-yellow': getPagination.hasNext,
          'bg-grey': !getPagination.hasNext,
        }"
        :disabled="!getPagination.hasNext"
        @click="prevOrNext(getPagination.next)"
      >
        <icons name="nextPage" class="text-appBackground" />
      </button>
    </div>
    <loading :isOpen="getLoading" />
    <customer-detail
      :isOpen="openDetail"
      :customer="selectedCustomer"
      @close-modal="closeOpenDetail"
    />
  </app-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'
import CustomerDetail from '~/components/App/components/CustomerDetail.vue'
import Loading from '~/components/App/components/Loading.vue'
import Icons from '~/components/global/Icons.vue'

export default {
  layout: 'app',
  components: {
    AppLayout,
    AppTitle,
    Icons,
    Loading,
    CustomerDetail,
  },
  data: () => ({
    ci: '',
    file: '',
    filename: '',
    openDetail: false,
    selectedCustomer: {},
  }),
  computed: {
    ...mapGetters('payment', [
      'getCustomers',
      'getPagination',
      'getLoading',
      'getCustomerResult',
    ]),
    isFileValid() {
      return this.file !== String
    },
  },
  mounted() {
    if (!this.getCustomers.length) {
      this.fetchCustomers(1)
    }
  },
  methods: {
    ...mapActions('payment', [
      'fetchCustomers',
      'uploadExcel',
      'fetchCustomersByCi',
      'clearCustomerResult',
    ]),
    hasPayed(paymentDone) {
      return paymentDone ? 'Pagado' : 'No pagado'
    },
    onFileChange(e) {
      const file = e.target.files ? e.target.files[0] : ''
      this.file = file
      this.filename = file.name
    },
    uploadFile() {
      const fd = new FormData()
      fd.append('excel', this.file)
      this.uploadExcel(fd)
    },
    formattingDate(date) {
      let utc_days = Math.floor(date - 25569)
      let utc_value = utc_days * 86400
      let date_info = new Date(utc_value * 1000)
      let fractional_day = date - Math.floor(date) + 0.0000001
      let total_seconds = Math.floor(86400 * fractional_day)
      let seconds = total_seconds % 60
      total_seconds -= seconds
      let hours = Math.floor(total_seconds / (60 * 60))
      let minutes = Math.floor(total_seconds / 60) % 60
      return new Date(
        date_info.getFullYear(),
        date_info.getMonth(),
        date_info.getDate()
      )
    },
    prevOrNext(page) {
      if (page === null) {
        return
      }
      this.fetchCustomers(page)
    },
    searchByCi(ci) {
      this.fetchCustomersByCi(ci)
    },
    getSelectedCustomer(customer) {
      this.selectedCustomer = customer
      this.openDetail = true
    },
    closeOpenDetail() {
      this.openDetail = false
    },
    clearSearch() {
      this.clearCustomerResult()
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