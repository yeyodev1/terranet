<template>
    <div class="flex flex-col items-center justify-center w-full sm:flex-row">
        <div
            class="flex flex-col items-center justify-center w-4/5 px-24 pt-8 mt-8 border-b sm:justify-evenly max-w-7xl background pb-7"
        >
            <!-- PICHINCHA BANK  -->
            <div
                class="flex flex-col items-center justify-around w-full pb-6 border-b sm:flex-row border-lightBlue pt-7"
            >
                <div class="flex w-24 h-11 m">
                    <img
                        src="@/static/Banks/BancoPichincha.png"
                        alt="Logo del banco pichincha"
                    />
                </div>
                <div class="flex flex-col sm:flex-row">
                    <div>
                        <p
                            class="font-semibold text-center text-white font-principal"
                        >
                            Banco Pichincha
                        </p>
                    </div>
                </div>
                <div>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Código: 74801
                    </p>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Roxana Torres Terranova
                    </p>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Ci. transferencia: 0915776264
                    </p>
                </div>
            </div>
            <!-- BOLIVARIANO BANK -->
            <div
                class="flex flex-col items-center justify-around w-full pb-6 border-b sm:flex-row border-lightBlue pt-7"
            >
                <div class="flex w-24 h-11 m">
                    <img
                        src="@/static/Banks/BancoBolivarianoYWestern.png"
                        alt="Logo del banco bolivariano"
                    />
                </div>
                <div class="flex flex-col sm:flex-row">
                    <div>
                        <p
                            class="font-semibold text-center text-white font-principal"
                        >
                            Banco Bolivariano <br />
                            Cuenta Activa Western union
                        </p>
                        <p
                            class="font-semibold text-center text-white font-principal"
                        >
                            Cuenta <br />
                            Corriente: 0065061860
                        </p>
                    </div>
                </div>
                <div>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Cuenta ahorros: 1056182376
                    </p>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Roxana Torres Terranova
                    </p>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Ci. transferencia: 0915776264
                    </p>
                </div>
            </div>
            <!-- PRODUBANCO  -->
            <div
                class="flex flex-col items-center justify-around w-full pb-6 border-b sm:flex-row border-lightBlue pt-7"
            >
                <div class="flex w-24 h-11 m">
                    <img
                        src="@/static/Banks/ProdubancoYServipago.png"
                        alt="Logo de Produbanco"
                    />
                </div>
                <div class="flex flex-col sm:flex-row">
                    <div>
                        <p
                            class="font-semibold text-center text-white font-principal"
                        >
                            Produbanco <br />
                            Servipagos
                        </p>
                    </div>
                </div>
                <div>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Cuenta <br />
                        corriente: 02011019065
                    </p>
                </div>
            </div>
            <!-- BANCO DEL PACIFICO  -->
            <div
                class="flex flex-col items-center justify-around w-full pb-6 sm:flex-row pt-7"
            >
                <div class="flex w-24 h-11 m">
                    <img src="@/static/Banks/BancoPacifico.png" alt="" />
                </div>
                <div class="flex flex-col sm:flex-row">
                    <div>
                        <p
                            class="font-semibold text-center text-white font-principal"
                        >
                            Banco Del Pacífico
                        </p>
                    </div>
                </div>
                <div>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Cuenta ahorros: 1056182376
                    </p>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Roxana Torres Terranova
                    </p>
                    <p
                        class="font-semibold text-center text-white font-principal"
                    >
                        Ci. transferencia: 0915776264
                    </p>
                </div>
            </div>
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
