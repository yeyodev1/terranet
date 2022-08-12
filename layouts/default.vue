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
  }),
}
</script>


<style scoped>
.background {
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
</style>