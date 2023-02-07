<template>
  <div class="flex flex-col w-full">
    <div
      class="w-full background"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }"
    >
      <Header />
      <Menu />
      <nuxt />
    </div>
    <Benefits v-if="!isHome" />
    <PhoneCallToAction v-if="!isHome" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '~/components/global/The/Header.vue'
import Footer from '~/components/global/The/Footer.vue'
import Menu from '~/components/global/The/Menu.vue'
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'

export default {
  components: {
    Header,
    Footer,
    Menu,
    Benefits,
    PhoneCallToAction
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
    if (!this.getPlans.length) {
      this.fetchPlans()
    }
  },
  computed: {
    ...mapGetters('plans', ['getPlans']),
    getRoute() {
      return this.$route.path
    },
    isHome() {
      return this.$route.name === 'index';
    }
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
  methods: {
    ...mapActions('plans', ['fetchPlans']),
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
