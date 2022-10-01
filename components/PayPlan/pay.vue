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
        <p class="text-lg font-bold text-white font-principal">Cédula</p>
        <input
          type="number"
          v-model="userIdentification"
          placeholder="Número de cédula"
          class="
            w-full
            p-3
            text-sm text-white
            border
            rounded-md
            outline-none
            background-input
            border-lightBlue
          "
        />
        <div v-if="isCustomer" class="flex justify-center items-center mb-10">
          <button
            class="
              p-3
              mt-4
              text-sm text-white
              border
              rounded-md
              font-principal
              border-lightBlue
            "
          >
            buscar
          </button>
        </div>
        <div v-else class="mt-12 flex flex-col justify-center items-center">
          <p class="text-white font-principal">
            <strong> Nombre: </strong> {{ customer.name }}
          </p>
          <p class="text-white font-principal">
            <strong> Valor pendiente de pago: </strong>
            {{ customer.pendingValue }}
          </p>
          <button
            class="
              p-3
              text-sm text-white
              border
              rounded-md
              font-principal
              border-lightBlue
              mt-12
              mb-10
            "
          >
            Botón de pago
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    userIdentification: '',
    customer: {},
  }),
  computed: {
    isCustomer() {
      return Object.keys(this.customer).length === 0
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
