<template>
    <div>
        <div class="background">
            <TheHeader />
            <HomeHero />
        </div>

        <PhoneCallToAction />

        <OurPlanes />

        <Benefits />
        <PaymentsMethod />
        <PhoneCallToAction />
        <Footer />
    </div>
</template>

<script>
import PhoneCallToAction from '../components/Home/PhoneCallToAction.vue'
import OurPlanes from '~/components/Home/OurPlanes.vue'
import Benefits from '~/components/Home/Benefits.vue'
import PaymentsMethod from '~/components/Home/PaymentsMethod.vue'
import Footer from '~/components/global/The/Footer.vue'
export default {
    components: {
        PhoneCallToAction,
        OurPlanes,
        Benefits,
        PaymentsMethod,
        Footer,
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
