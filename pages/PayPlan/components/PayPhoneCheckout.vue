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
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://pay.payphonetodoesposible.com/api/button/js?appId=3ixGNbNDlkaCoCxtXlFTQ'
    document.body.appendChild(script)
    this.clientTransactionId = 'transaction' + Date.now();
    console.log(this.clientTransactionId)
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
            }
          }).catch(function (erro) {
            console.error('error', erro)
          })
          console.log("Modelo:");
          console.log(model);
        },
      });

      payphoneButton.render("#pp-button");
    }
  }
}
</script>