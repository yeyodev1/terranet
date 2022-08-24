<template>
    <div class="w-full">
        <HeroData />
        <div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Footer from '~/components/global/The/Footer.vue'
import HeroData from '~/components/dataSent/heroData.vue'
export default {
    components: { Footer, HeroData },
}
</script>
