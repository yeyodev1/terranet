<template>
  <div class="w-full mx-auto flex justify-center items-center pb-6">
    <div id="pp-button"></div>
  </div>
</template>

<script>
export default {
  props: {
    amount: {
      type: Number,
      required: true
    },
  },
  data: () => ({
    currency: 'USD',
    clientTransactionId: '',
    responseUrl: ''
  }),
  async mounted() {
    this.clientTransactionId = 'transaction' + Date.now();
    this.initPayment()
  },
  methods: {
    initPayment() {
      const payphoneButton = payphone.Button({
        token: process.env.NUXT_PAYPHONE_TOKEN,
        btnHorizontal: false,
        btnCard: true,
        createOrder: (actions) => {
          return actions.prepare({
            amount: this.amount,
            amountWithoutTax: this.amount,
            currency: 'USD',
            clientTransactionId: this.clientTransactionId,
            lang: 'es',
          });
        },
        onComplete: (model, actions) => {
          return actions.confirm({
            id: model.id,
            clientTxId: model.clientTxId,
          }).then(function (value) {
            if (value.transactionsStatus == 'Approved') {
              alert('paso' + value.transactionId + 'recibido, ' + 'estado' + value.transactionsStatus)
              console.log('pago exitoso')
            }
          }).catch(function (error) {
            console.error('error', error)
            console.log('pago no realizado')
          })
        },
      });

      payphoneButton.render("#pp-button");
    }
  }
}
</script>