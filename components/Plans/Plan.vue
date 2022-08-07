<template>
    <div
        class="flex flex-col items-center justify-center w-full mt-6 rounded-md background-plans sm:mt-20"
    >
        <p
            class="px-8 pt-10 text-5xl text-center font-secondary text-yellow whitespace-nowrap"
        >
            {{ homePlan.title }}
        </p>
        <div class="flex">
            <p class="text-4xl font-extrabold text-white font-principal">
                ${{ getDollars }}
            </p>
            <div class="flex flex-col items-start justify-start">
                <p class="text-white font-principal">.{{ getCents }}</p>
                <p class="text-xs font-semibold text-yellow">+IMP</p>
            </div>
        </div>
        <div class="flex flex-col mt-12 mb-8">
            <div>
                <Speedometer />
            </div>
            <div class="flex">
                <p class="text-3xl font-semibold text-white font-principal">
                    {{ homePlan.mbps }}
                </p>
                <p class="text-base text-white font-principal">Mbps</p>
            </div>
        </div>
    </div>
</template>

<script>
import Speedometer from '../global/The/Svg/Speedometer.vue'
export default {
    components: { Speedometer },
    props: {
        homePlan: {
            type: Object,
            required: true,
        },
    },
    computed: {
        // THIS COMPUTED FUNCTION GET THE DOLLARS OF A VALUE
        getDollars() {
            return Math.trunc(
                Math.round((this.homePlan.price * 100) / 100).toFixed(2)
            )
        },
        // THIS COMPUTED FUNCTION GET THE CENTS OF A VALUE
        getCents() {
            const decimalStr = Math.round((this.homePlan.price * 100) / 100)
                .toFixed(2)
                .toString()
                .split('.')[1]
            return Number(decimalStr)
        },
    },
}
</script>

<style scoped>
.background-plans {
    background-image: url('@/static/Backgrounds/Button/BackgroundPlanButton.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
