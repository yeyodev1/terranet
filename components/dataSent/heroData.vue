<template>
    <div
        class="flex items-center justify-center w-full py-12 sm:px-7 md:py-40 lg:px-14"
    >
        <div
            class="flex flex-wrap items-center justify-center w-full md:justify-start md:items-start max-w-7xl"
        >
            <div class="w-4/5 md:w-2/3">
                <p
                    class="text-2xl font-bold text-white lg:text-3xl font-principal"
                >
                    Gracias por enviar tus datos, ahora formas parte de nuestros
                    clientes
                </p>
                <p class="mt-3 text-base text-white font-principal">
                    En breve un asesor Terranet se comunicará contigo
                </p>
                <div
                    class="items-center justify-center w-full md:justify-start md:w-1/4 hidden md:flex mt-12"
                >
                    <nuxt-link to="/">
                        <button
                            class="px-6 py-3 sm:text-base text-xs font-bold text-white border rounded-md hover:bg-yellow border-yellow hover:text-black"
                        >
                            Volver
                        </button>
                    </nuxt-link>
                </div>
            </div>
            <div
                class="flex items-center justify-center w-4/5 mt-12 mb-12 md:justify-start md:w-1/3"
            >
                <div>
                    <Thanks class="md:hidden" />
                    <ThanksTablet class="hidden md:flex lg:hidden" />
                    <ThanksLaptop class="hidden lg:flex" />
                </div>
            </div>
            <div
                class="flex items-center justify-center w-full md:justify-start md:w-1/4 md:hidden"
            >
                <nuxt-link to="/">
                    <button
                        class="px-6 py-3 text-xs font-bold text-white border rounded-md hover:bg-yellow border-yellow hover:text-black"
                    >
                        Volver
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import Thanks from '../global/The/Svg/Thanks.vue'
import ThanksTablet from '../global/The/Svg/ThanksTablet.vue'
import ThanksLaptop from '../global/The/Svg/ThanksLaptop.vue'
export default {
    components: {
        Thanks,
        ThanksTablet,
        ThanksLaptop,
    },
}
</script>
