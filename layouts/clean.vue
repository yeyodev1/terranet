<template>
  <div class="w-full bg-appBackground flex flex-col justify-start min-h-screen">
    <header class="bg-blue mx-auto w-full max-w-screen-lg flex justify-center items-center py-2 px-4">
      <nuxt-link to="/" class="w-32">
        <img src="@/static/logos/LogoHeader.png" alt="terranet">
      </nuxt-link>
    </header>
    <nuxt />
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', ['getUser'])
  },
  watch: {
    getUser(value) {
      if(value !== null) {
        this.$router.push("/admin/settings/newplans")
      }
    }
  }
}
</script>