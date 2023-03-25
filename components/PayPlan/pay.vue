<template>
  <div class="w-full pt-12 lg:pt-24">
    <div class="flex flex-col items-center justify-center w-4/5 mx-auto">
      <p class="text-2xl font-bold text-center text-white font-principal">
        Pago en línea
      </p>
      <p class="text-base text-center text-white font-principal sm:text-2xl">
        Realiza el pago de tus planes cada mes
      </p>
      <div class="mt-8 sm:w-1/3 sm:mt-12">
        <p class="text-lg font-bold text-white font-principal">
          Cédula
        </p>
        <input type="number" v-model="userIdentification" placeholder="Número de cédula"
          class="w-full p-3 text-sm text-white border rounded-md outline-none background-input border-lightBlue" />
        <div v-if="!isCustomer" class="flex justify-center items-center mb-10">
          <button class="p-3 mt-4 text-sm text-white border rounded-md font-principal border-lightBlue"
            @click="getCustomer">
            buscar
          </button>
        </div>
        <div v-else class="my-12 w-full mx-auto flex flex-col justify-center items-start">
          <p class="text-white font-principal">
            <strong class="mr-2 mb-4"> Nombre: </strong>
            {{ customer.res.nombre }}
          </p>
          <p class="text-white font-principal text-xl">
            <strong class="mr-2 text-base"> Valor pendiente de pago: </strong>
            $ {{ customer.res.saldo }}
          </p>
          <p class="text-white font-principal text-lg">
            <strong class="mr-2 text-base"> Fecha de corte: </strong>
            {{ customer.fecha_corte }}
          </p>
        </div>
        <warning :isOpen="errorOpen" :getError="errorMessage" @close-warning="errorOpen = false" />
        <success :isOpen="successOpen" :getSuccess="successMessage" @close-success="successOpen = false" />
        <PayPhoneCheckout :amount="getDoubt" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PayPhoneCheckout from '~/pages/PayPlan/components/PayPhoneCheckout.vue';

export default {
  components: { PayPhoneCheckout },
  data: () => ({
    userIdentification: "",
    customer: {},
    errorOpen: false,
    errorMessage: "Por favor, comprueba que hayas llenado todos los campos por favor",
    successOpen: false,
    successMessage: "Tú solicitud ha sido enviada con éxito",
    isPayphoneOpen: false
  }),
  computed: {
    isCustomer() {
      return Object.keys(this.customer).length;
    },
    formIsValid() {
      return this.userIdentification.length > 9;
    },
    getDoubt() {
      return Object.keys(this.customer).length ? this.customer.res.saldo  * 100 : 0;
    }
  },
  methods: {
    async getCustomer() {
      try {
        const request = { ci: this.userIdentification };
        const response = await axios.get(`${process.env.NUXT_API}api/payment/${this.userIdentification}`);
        this.customer = response.data;
        this.isPayphoneOpen = true
      }
      catch (e) {
        this.errorOpen = true;
      }
    },
    async pay() {
      try {
        const request = {
          paymentDone: true
        };
        console.log(this.customer);
        const response = await axios.patch(`${process.env.NUXT_API}api/payment/${this.customer._id}`, request);
        console.log("exito");
      }
      catch (e) {
        console.error(e);
      }
    },
  },
}
</script>

<style scoped>
.background-input {
  background: none;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
