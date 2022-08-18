<template>
    <div
        class="flex flex-col items-center justify-center w-full pb-20 border-b-2 border-white background-pay sm:pb-16 lg:pb-20"
    >
        <div class="w-4/5 pt-10 mx-auto lg:pt-24">
            <p
                class="text-2xl font-bold text-center text-white font-principal sm:text-5xl"
            >
                Conoce nuestros medios de pago
            </p>
        </div>
        <div
            class="flex flex-wrap items-center w-4/5 max-w-6xl justify-evenly md:px-20 sm:px-6 sm:w-full"
        >
            <div class="flex items-center justify-center w-full sm:w-1/2">
                <div>
                    <BankCards class="sm:hidden" />
                    <BankCardsTablet class="hidden sm:flex" />
                </div>
            </div>
            <div class="w-full mt-11 sm:w-1/2">
                <p class="text-base text-center text-white sm:text-2xl">
                    ¡Contrata tus servicios de <br class="sm:hidden" />internet
                    sin salir de casa!
                </p>
                <div class="mt-6">
                    <nuxt-link to="/waystopay">
                        <button
                            class="w-full max-w-screen-lg py-3 text-base font-semibold text-white border rounded-md font-principal border-yellow px-14"
                        >
                            Conócelos aquí
                        </button>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BankCards from '../global/The/Svg/BankCards.vue'
import BankCardsTablet from '../global/The/Svg/BankCardsTablet.vue'
export default {
    components: {
        BankCards,
        BankCardsTablet,
    },
}
</script>

<style scoped>
.background-pay {
    background-image: url('@/static/Backgrounds/background-4.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
