<template>
    <div>
        <SupportButton />
        <HomeHero />

        <OurPlanes />

        <PaymentsMethod />
    </div>
</template>

<script>
import OurPlanes from '~/components/Home/OurPlanes.vue'
import PaymentsMethod from '~/components/Home/PaymentsMethod.vue'
import SupportButton from '~/components/Home/SupportButton.vue'

export default {
    name: 'IndexPage',
    components: {
        OurPlanes,
        PaymentsMethod,
        SupportButton,
    },
}
</script>

<style>
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
