<template>
  <div class="flex flex-col items-center justify-center w-full">
    <div
      class="
        flex flex-col
        items-center
        justify-center
        w-4/5
        px-24
        pt-8
        mt-8
        border-b
        md:justify-evenly
        max-w-7xl
        background
        pb-7
      "
    >
      <!-- PICHINCHA BANK  -->
      <div
        class="
          flex flex-col
          items-center
          justify-around
          w-full
          pb-6
          border-b
          sm:flex-row
          border-lightBlue
          pt-7
        "
      >
        <div class="flex w-24 h-11 m">
          <img
            src="@/static/Banks/BancoPichincha.png"
            alt="Logo del banco pichincha"
          />
        </div>
        <div class="flex flex-col sm:flex-row">
          <div>
            <p class="font-semibold text-center text-white font-principal">
              Banco Pichincha <br />
              Corresponsales Mi Vecino
            </p>
          </div>
        </div>
        <div>
          <p class="font-semibold text-center text-white font-principal">
            Código: 74801 <br />
            + Número de Identificación del titular
          </p>
        </div>
      </div>
      <!-- BOLIVARIANO BANK -->
      <div
        class="
          flex flex-col
          items-center
          justify-around
          w-full
          pb-6
          border-b
          sm:flex-row
          border-lightBlue
          pt-7
        "
      >
        <div class="flex w-24 h-11 m">
          <img
            src="@/static/Banks/BancoBolivarianoYWestern.png"
            alt="Logo del banco bolivariano"
          />
        </div>
        <div class="flex flex-col sm:flex-row">
          <div>
            <p class="font-semibold text-center text-white font-principal">
              Banco Bolivariano <br />
              Cuenta Activa Western union
            </p>
          </div>
        </div>
        <div>
          <p class="font-semibold text-center text-white font-principal">
            Cuenta corriente: 0065061860
          </p>
        </div>
      </div>
      <!-- PRODUBANCO  -->
      <div
        class="
          flex flex-col
          items-center
          justify-around
          w-full
          pb-6
          border-b
          sm:flex-row
          border-lightBlue
          pt-7
        "
      >
        <div class="flex w-24 h-11 m">
          <img
            src="@/static/Banks/ProdubancoYServipago.png"
            alt="Logo de Produbanco"
          />
        </div>
        <div class="flex flex-col sm:flex-row">
          <div>
            <p class="font-semibold text-center text-white font-principal">
              Produbanco <br />
              Servipagos
            </p>
          </div>
        </div>
        <div>
          <p class="font-semibold text-center text-white font-principal">
            Cuenta <br class="sm:hidden" />
            corriente: 02011019065
          </p>
        </div>
      </div>
      <!-- BANCO DEL PACIFICO  -->
      <div
        class="
          flex flex-col
          items-center
          justify-around
          w-full
          pb-6
          sm:flex-row
          pt-7
        "
      >
        <div class="flex w-24 h-11 m">
          <img src="@/static/Banks/BancoPacifico.png" alt="" />
        </div>
        <div class="flex flex-col sm:flex-row">
          <div>
            <p class="font-semibold text-center text-white font-principal">
              Banco Del Pacífico
            </p>
          </div>
        </div>
        <div>
          <p class="font-semibold text-center text-white font-principal">
            Cuenta ahorros: 1056182376
          </p>
          <p class="font-semibold text-center text-white font-principal">
            Roxana Torres Terranova
          </p>
          <p class="font-semibold text-center text-white font-principal">
            Ci. transferencia: 0915776264
          </p>
        </div>
      </div>
    </div>
    <div class="w-4/5 mt-3 mb-10 max-w-7xl">
      <p class="text-yellow text-lg lg:text-xl">Importante</p>
      <p class="text-base text-white font-principal">
        Envíanos tu comprobante de pago al WhatsApp +593969001683
      </p>
      <p class="text-base text-white font-principal">
        Realiza el pago de tus planes cada mes
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.background {
  background: linear-gradient(
    155.02deg,
    rgba(250, 251, 255, 0.4) 0.55%,
    rgba(250, 251, 255, 0.190022) 20.21%,
    rgba(250, 251, 255, 0.124771) 34.02%,
    rgba(250, 251, 255, 0.0654234) 44.23%,
    rgba(250, 251, 255, 0.02) 75.4%
  );
  border-radius: 8px;
}
</style>
