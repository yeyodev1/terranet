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
    bgImages: [
      require('@/static/Backgrounds/Background.png'),
      require('@/static/Backgrounds/Background-2.png'),
      require('@/static/Backgrounds/Background-3.png'),
      require('@/static/Backgrounds/Background-4.png'),
    ],
    bgImage: '',
  }),
  mounted() {
    if (this.$route.path === '/') {
      this.bgImage = this.bgImages[1]
    }
    if (this.$route.path === '/waysToPay') {
      this.bgImage = this.bgImages[3]
    }
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