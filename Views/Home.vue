<template>
    <div>
        <div class="background">
            <TheHeader />
            <HomeHero />
        </div>

        <PhoneCallToAction class="background-phoneCallToAction" />
        <div class="background">
            <OurPlanes />
        </div>
    </div>
</template>

<script>
import PhoneCallToAction from '../components/Home/PhoneCallToAction.vue'
import OurPlanes from '~/components/Home/OurPlanes.vue'
export default {
    components: {
        PhoneCallToAction,
        OurPlanes,
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
