<template>
    <div>
        <div class="flex w-4/5 mx-auto mt-12 rounded-lg background">
            <div
                class="flex flex-col items-center justify-center w-1/2 py-3 sm:w-3/5 sm:py-6"
            >
                <p class="text-xs text-center text-white font-principal">
                    Código de descuento:
                </p>
                <p
                    class="text-base font-bold text-center uppercase text-yellow font-principal sm:text-2xl"
                >
                    descuento
                </p>
                <p class="text-xs text-center text-white font-principal">
                    *Válido para clientes nuevos
                </p>
            </div>

            <div class="flex items-center justify-center w-1/2 sm:w-2/5">
                <p class="text-3xl text-center font-secondary text-yellow">
                    45% Descuento
                </p>
            </div>
        </div>
        <div class="flex items-center justify-center mt-12 mb-7">
            <button
                class="px-6 py-3 text-base font-semibold text-white border rounded-md border-yellow"
            >
                Utilizar
            </button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
}
</script>

<style scoped>
.background {
    background-image: url('@/static/Backgrounds/Coupon/background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
@font-face {
    font-family: 'FontJek';
    font-display: swap;
    src: url('@/assets/fonts/Fontjek.ttf') format('truetype');
}
</style>
