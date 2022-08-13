<template>
  <header class="w-full border-b-2 border-solid border-lightBlue">
    <!-- HEADER UNTIL BEFORE LG DEVICES -->
    <div class="w-full flex justify-between py-5 lg:hidden">
      <nuxt-link to="/" class="w-16 flex items-center justify-center px-5">
        <LogoHeader />
      </nuxt-link>
      <div class="flex justify-center items-center pr-6">
        <button class="w-6 h-6">
          <Icons class="w-full h-6 text-white" :name="TheMenu" />
        </button>
      </div>
    </div>
    <!-- HEADER SINCE LG DEVICES -->
    <div class="w-full hidden lg:flex justify-between max-w-6xl mx-auto">
      <div class="w-32 flex items-center justify-center pt-6 pb-5">
        <img
          class=""
          src="@/static/Logos/LogoHeader.png"
          alt="Super logo de la muerte"
        />
      </div>
      <div class="flex w-5/6 justify-between mx-11 items-center">
        <nuxt-link :to="item.link" v-for="(item, index) in menu" :key="index">
          <TheTextStyle class="font-principal" :name="item.name">
          </TheTextStyle>
        </nuxt-link>
      </div>
      <div class="flex justify-center items-center pr-3">
        <button
          class="
            font-principal
            border border-yellow
            rounded-md
            text-lg text-white
            w-52
            py-3
          "
        >
          Contrata tu servicio
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import Icons from '../Icons.vue'
import LogoHeader from './Logos/LogoHeader.vue'

export default {
  components: {
    Icons,
    LogoHeader,
  },
  data: () => ({
    TheMenu: 'TheMenu',
    menu: [
      {
        name: 'Inicio',
        link: '/',
      },
      {
        name: 'Planes',
        link: '#',
      },
      {
        name: 'Medios de pago',
        link: '/WaysToPay',
      },
      {
        name: 'Atencion al cliente',
        link: '/support',
      },
    ],
  }),
}
</script>
