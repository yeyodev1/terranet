<template>
    <div class="background">
        <TheHeader />
        <HomeHero />
        <PhoneCallToAction />
    </div>
</template>

<script>
import PhoneCallToAction from '../components/Home/PhoneCallToAction.vue'
export default {
    components: {
        PhoneCallToAction,
    },
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
