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
import axios from 'axios'

export default {
  data: () => ({
    isLoading: true,
    result: ''
  }),
  async mounted() {
    const transaccion = this.$route.query.id
    const client = this.$route.query.clientTransactionId;

    const data = JSON.stringify({
      id: parseInt(transaccion),
      clientTxId: client
    });

    console.log(process.env.NUXT_PAYPHONE_TOKEN)

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
      this.result = JSON.stringify(response)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  },
}
</script>