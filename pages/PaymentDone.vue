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
    const urlParams = new URLSearchParams(window.location.search);
    const transaccion = urlParams.get('id')
    const client = urlParams('clientTransactionId');

    const data = JSON.stringify({
      id: parseInt(transaccion),
      clientTxId: client
    });

    const result = await fetch('https://pay.payphonetodoesposible.com/api/button/V2/Confirm'. {
      methods: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NUXT_PAYPHONE_TOKEN}`,
        'Content-type': 'application/json'
      },
      body: data
    })

    const response = await result.json();

    this.isLoading = false;
    this.result = JSON.stringify(response)
  }
}
</script>