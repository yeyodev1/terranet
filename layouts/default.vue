<template>
    <div class="w-full flex flex-col">
        <div
            class="background w-full"
            :style="{ backgroundImage: 'url(' + bgImage + ')' }"
        >
            <Header />
            <nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/global/The/Header.vue'
import Footer from '~/components/global/The/Footer.vue'
export default {
    components: {
        Header,
        Footer,
    },
    data: () => ({
        bgImage: require('@/static/Backgrounds/Background.png'),
        bgImages: [
            require('@/static/Backgrounds/Background.png'),
            require('@/static/Backgrounds/Background-2.png'),
            require('@/static/Backgrounds/Background-3.png'),
            require('@/static/Backgrounds/background-4.png'),
        ],
    }),
    mounted() {
        if (this.$route.path === '/WaysToPay') {
            this.bgImage = this.bgImages[3]
        }
    },
    computed: {
        getRoute() {
            return this.$route.path
        },
    },
    watch: {
        getRoute(value) {
            if (value === '/WaysToPay') {
                this.bgImage = this.bgImages[3]
            } else {
                this.bgImage = this.bgImages[0]
            }
        },
    },
}
</script>

<style scoped>
.background {
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
}
</style>
