<template>
    <div class="background">
        <TheHeader />
        <div class="w-4/5 mx-auto max-w-7xl">
            <p
                class="mt-8 text-2xl font-bold text-center text-white lg:pt-20 sm:text-5xl"
            >
                Plan Hogar
            </p>
            <p class="text-base font-medium text-center text-white sm:text-2xl">
                !Tenemos el plan que necesitas!
            </p>
            <div class="flex flex-wrap w-full max-w-6xl justify-evenly">
                <div
                    class="w-full mt-6 sm:mt-12"
                    v-for="(homePlan, index) in homePlans"
                    :key="index"
                >
                    <Plan :homePlan="homePlan" />
                </div>
            </div>
        </div>
        <TestPlan />
        <Benefits />
    </div>
</template>

<script>
import TheHeader from '~/components/global/The/Header.vue'
import Plan from '../components/Plans/Plan.vue'
import TestPlan from '~/components/Plans/TestPlan.vue'
import Benefits from '~/components/Home/Benefits.vue'

export default {
    components: {
        TheHeader,
        Plan,
        TestPlan,
        Benefits,
    },
    data: () => ({
        homePlans: [
            {
                title: 'Plan Mítico',
                price: '44.65',
                mbps: '120',
            },
            {
                title: 'Plan Élite',
                price: '35.71',
                mbps: '80',
            },
            {
                title: 'Plan Máster',
                price: '31.25',
                mbps: '70',
            },
            {
                title: 'Plan basic',
                price: '31.25',
                mbps: '50',
            },
        ],
    }),
}
</script>

<style scoped>
.background {
    background-image: url('@/static/Backgrounds/Background-2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
@font-face {
    font-family: 'FontJek';
    font-display: swap;
    src: url('@/assets/fonts/Fontjek.otf') format('truetype');
}

@font-face {
    font-family: 'FontJek';
    font-display: swap;
    src: url('@/assets/fonts/Fontjek.ttf') format('truetype');
}
</style>
