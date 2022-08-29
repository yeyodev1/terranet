<template>
    <div class="w-full">
        <Pay />
        <Benefits />
        <Footer />
    </div>
</template>

<script>
import Benefits from '~/components/Home/Benefits.vue'
import Footer from '~/components/global/The/Footer.vue'
import Pay from '~/components/PayPlan/pay.vue'
export default {
    components: { Benefits, Footer, Pay },
}
</script>
