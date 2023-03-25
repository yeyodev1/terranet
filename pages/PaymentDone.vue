<template>
  <div class="bg-lightBlue">
    <div v-if="isLoading" class="text-white font-open">
      Cargando...
    </div>
    <div v-else class="text-white font-open">
      <p>
        {{ result }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoading: true,
    result: ''
  }),
  async created() {
    console.log('router', this.$router)
    console.log('route', this.$route)
    const transaccion = this.$route.query.id
    const client = this.$route.query.clientTransactionId;

    const data = JSON.stringify({
      id: parseInt(transaccion),
      clientTxId: client
    });

    console.log('data', data)
    console.log('transaccion', transaccion)
    console.log('client', client)

    const result = await fetch('https://pay.payphonetodoesposible.com/api/button/V2/Confirm', {
      methods: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NUXT_PAYPHONE_TOKEN}`,
        'Content-type': 'application/json'
      },
      body: data
    })

    console.log(result)

    const response = await result.json();

    console.log(response)

    // this.isLoading = false;
    // this.result = JSON.stringify(response)
  }
}
</script>