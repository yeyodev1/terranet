<template>
    <div>
        <SupportButton />
        <HomeHero />

        <PhoneCallToAction />

        <OurPlanes />

        <Benefits />
        <PaymentsMethod />
        <PhoneCallToAction />
    </div>
</template>

<script>
import PhoneCallToAction from '../components/Home/PhoneCallToAction.vue'
import OurPlanes from '~/components/Home/OurPlanes.vue'
import Benefits from '~/components/Home/Benefits.vue'
import PaymentsMethod from '~/components/Home/PaymentsMethod.vue'
import SupportButton from '~/components/Home/SupportButton.vue'
export default {
    components: {
        PhoneCallToAction,
        OurPlanes,
        Benefits,
        PaymentsMethod,
        SupportButton,
    },
}
</script>
