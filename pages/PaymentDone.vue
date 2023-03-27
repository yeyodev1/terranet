<template>
  <div class="bg-lightBlue py-4">
    <div v-if="isLoading" class="text-white font-open text-center text-3xl">
      Cargando...
    </div>
    <div v-else class="text-white font-open text-center text-2xl">
      <p>
        {{ result }}
      </p>
      <nuxt-link to="/" class="border border-white rounded-md px-2 py-1 mt-4 text-sm">
        Regresa al inicio
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    isLoading: true,
    result: ''
  }),
  computed: {
    ...mapGetters('payment', ['getCustomerResult'])
  },
  async mounted() {
    const transaccion = this.$route.query.id
    const client = this.$route.query.clientTransactionId;

    const data = JSON.stringify({
      id: parseInt(transaccion),
      clientTxId: client
    });
    try {
      const result = await fetch('https://pay.payphonetodoesposible.com/api/button/V2/Confirm', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NUXT_PAYPHONE_TOKEN}`,
          'Content-type': 'application/json'
        },
        body: data,
      })
      console.log(result)
      const response = await result.json();
      this.isLoading = false;
      if (response.transactionStatus === 'Approved') {
        this.paymentOnWisphub()
      }
      if (response.transactionStatus === 'Canceled') {
        this.result = 'Tu pago fue cancelado. Por favor escoge otro método de pago u otra tarjeta'
      }
      console.log(response.transactionStatus)
    } catch (error) {
      console.error(error)
      this.result = 'ooppp Algo ocurrio con el pago, contacta con Terranet Soporte'
    }
  },
  methods: {
    async paymentOnWisphub() {
      try {
        console.log(this.getCustomerResult);
        const billsId = this.getCustomerResult.res.facturas.map(bill => bill.id)
        console.log(billsId)
        const request = {
          ids: billsId
        }
        // const response = await axios.post(`${process.env.NUXT_API}api/payment`, request);
        // console.log(response)
        this.result = 'Tu pago fue aceptado exitosamente'
      } catch (e) {
        console.error(e);
      }
    },
  }
}
</script>