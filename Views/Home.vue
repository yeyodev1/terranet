<template>
    <div>
        <div class="background">
            <TheHeader />
            <HomeHero />
        </div>

        <PhoneCallToAction class="background-phoneCallToAction" />
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
.background-phoneCallToAction {
    background-image: url('@/static/Backgrounds/Background-3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
