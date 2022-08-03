<template>
    <div
        class="flex flex-col items-center justify-center w-full p-4 pb-12 lg:pb-20 sm:pb-10"
    >
        <div class="w-4/5 pt-10 mx-auto">
            <p
                class="text-2xl font-bold text-center text-white font-principal sm:text-5xl"
            >
                Nuestros planes
            </p>
            <p
                class="text-base font-medium text-center text-white font-principal sm:text-2xl"
            >
                Qué tipo de plan necesitas?
            </p>
        </div>
        <div
            class="flex flex-wrap items-center justify-around w-full mt-8 sm:justify-evenly max-w-7xl sm:mt-12"
        >
            <div class="w-4/5 sm:w-1/3">
                <nuxt-link class="" to="/">
                    <button
                        class="flex flex-col items-center justify-center w-full py-4 mt-8 rounded-lg bg-button sm:py-6"
                    >
                        <div class="pb-5">
                            <HomeWifi />
                        </div>
                        <div>
                            <p
                                class="text-3xl sm:text-5xl font-secondary text-yellow"
                            >
                                Hogar
                            </p>
                        </div>
                    </button>
                </nuxt-link>
            </div>
            <div class="w-4/5 sm:w-1/3">
                <nuxt-link class="" to="/">
                    <button
                        class="flex flex-col items-center justify-center w-full py-4 mt-8 rounded-lg bg-button sm:py-6"
                    >
                        <div class="pb-5">
                            <Corporation />
                        </div>
                        <div>
                            <p
                                class="text-3xl sm:text-5xl font-secondary text-yellow"
                            >
                                Corporativo
                            </p>
                        </div>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import HomeWifi from '../global/The/Svg/HomeWifi.vue'
import Corporation from '../global/The/Svg/Corporation.vue'

export default {
    components: {
        HomeWifi,
        Corporation,
    },
}
</script>

<style scoped>
.bg-button {
    background-image: url('@/static/Backgrounds/Button/BackgroundPlanButton.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
