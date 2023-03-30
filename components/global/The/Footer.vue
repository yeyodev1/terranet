<template>
  <footer class="w-full p-6 bg-white">
    <div class="mx-auto max-w-7xl">
      <img src="@/static/Logos/LogoFooter.png" alt="" />
    </div>

    <div class="flex flex-col mx-auto sm:justify-between md:justify-evenly md:flex-row lg:px-6 max-w-7xl">
      <!-- CALL CENTER -->
      <div>
        <p class="text-xl font-bold text-blue">Atención al cliente</p>
        <a href="tel:+593939329000">
          <button class="flex items-center justify-center mt-3 text-xl font-medium text-black transition-border">
            <icons class="h-6 pr-2" :name="phone" />
            0939329000
          </button>
        </a>
        <p class="text-xl font-bold text-blue">Ventas</p>
        <a href="tel:+593967377000">
          <button class="flex items-center justify-center mt-3 text-xl font-medium text-black transition-border">
            <icons class="h-6 pr-2" :name="phone" />
            0967377000
          </button>
        </a>
      </div>
      <!-- PRODUCTS  -->
      <div class="mt-12 md:mt-0">
        <Content :linkSection="linkSection" />
      </div>
      <!-- WE HELP YOU -->
      <div class="mt-12 md:mt-0">
        <Content :linkSection="linkSection2" />
      </div>
      <!-- EMPLOY -->
      <div class="mt-12 md:mt-0">
        <Content :linkSection="linkSection3" />
      </div>
      <!-- YOUR OPINION CARES -->
      <div class="mt-12 md:mt-0">
        <Content :linkSection="linkSection4" />
      </div>
      <div class="mt-12 md:mt-0">
        <div class="flex flex-col items-center justify-start w-full pl-4 lg:px-5">
          <p class="w-full text-xl font-bold text-blue">
            Normativa
          </p>
          <div class="flex flex-col w-full">
            <a v-for="(link, index) in getRules" :key="index" target="_blank" :href="link.url"
              class="hover:text-lightBlue w-full mt-3 text-base text-black transition-border">
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Icons from '@/components/global/Icons.vue'
import Content from './Content/Footer/content.vue'
export default {
  components: {
    Icons,
    Content,
  },
  data: () => ({
    phone: 'phone',
    linkSection: {
      title: 'Productos',
      links: [
        {
          name: 'Hogar',
          url: '/homeplans',
        },
        {
          name: 'Coorporativo',
          url: '/corporationplans',
        },
      ],
    },

    linkSection2: {
      title: 'Te ayudamos',
      links: [
        {
          name: 'Test de velocidad',
          url: '/speedometer',
        },
        {
          name: '¿Cuál es mi plan ideal',
          url: '/homeplans#testplan',
        },
        {
          name: 'Formas de pago',
          url: '/waystopay',
        },
        {
          name: 'Preguntas frecuentes',
          url: '/frequentQuestions',
        },
      ],
    },
    linkSection3: {
      title: 'Empleo',
      links: [
        {
          name: 'Trabaja con nosotros',
          url: '/WorkWithUs',
        },
      ],
    },
    linkSection4: {
      title: 'Tu opinión nos importa',
      links: [
        {
          name: 'Sugerencias y Recomendaciones',
          url: '/youropinion',
        },
      ],
    },
    // linkSection5: {
    //   title: 'Normativas y regulaciones',
    //   links: [
    //     {
    //       name: 'ARCOTEL',
    //       url: 'https://localhost:3000/hola2',
    //     },
    //     {
    //       name: 'CONTROL PARENTAL',
    //       url: 'https://localhost:3000/hola2',
    //     },
    //     {
    //       name: 'Políticas y privacidad',
    //       url: 'https://localhost:3000/hola2',
    //     },
    //     {
    //       name: 'Términos y condiciones',
    //       url: 'https://localhost:3000/hola2',
    //     },
    //   ],
    // },
  }),
  computed: {
    ...mapGetters('rulesLinks', ['getRules'])
  },
  mounted() {
    if (!this.getRules.length) {
      this.fetchRules()
    }
  },
  methods: {
    ...mapActions('rulesLinks', ['fetchRules'])
  }
}
</script>

<style scoped>
.transition-border {
  transition: 0.5s;
}

.transition-border:hover {
  border-bottom: 2px;
  color: #152f84;
}
</style>
