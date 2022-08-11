<template>
    <div class="w-full background">
        <Header />
        <div class="w-4/5 mx-auto sm:pt-20">
            <p
                class="pt-12 text-2xl font-bold text-center text-white font-principal sm:text-5xl"
            >
                Test de velocidad
            </p>
        </div>
        <Speedometer />
        <Tips />
    </div>
</template>

<script>
import Header from '~/components/global/The/Header.vue'
import Speedometer from '~/components/Speedometer/Speedometer.vue'
import Tips from '../components/Speedometer/Tips.vue'

export default {
    components: { Header, Speedometer, Tips },
}
</script>

<style scoped>
.background {
    background-image: url('@/static/Backgrounds/Background-2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
