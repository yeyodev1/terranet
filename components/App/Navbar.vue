<template>
  <div
    class="
      w-64
      bg-appBackground
      fixed
      top-0
      bottom-0
      right-0
      z-50
      border-r border-lightBlue
      p-4
      min-h-screen
      transition-all
    "
    :class="{ 'left-0': isMenuOpen, '-left-64': !isMenuOpen }"
  >
    <div class="w-full py-1 px-2 flex justify-end items-center mb-2">
      <button @click="closeMenu" class="w-8 h-8">
        <icons name="close" class="text-white" />
      </button>
    </div>
    <div class="flex flex-col justify-start items-center">
      <menu-toggle
        v-for="(item, i) in menu"
        :key="i"
        :itemMenu="item"
        @close-menu="closeMenu"
      />
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import MenuToggle from '@/components/App/components/MenuToggle.vue'
import Icons from '../global/Icons.vue'

export default {
  components: { MenuToggle, Icons },
  data: () => ({
    menu: [
      {
        name: 'Contratación y pagos',
        link: '/payments',
      },
      {
        name: 'Comunicación',
        link: '/communications',
        items: [
          {
            name: 'Atención al cliente',
            link: '/',
          },
          {
            name: 'Cambio de titular',
            link: '/',
          },
          {
            name: 'Actualización de datos',
            link: '/',
          },
          {
            name: 'Traslados',
            link: '/',
          },
          {
            name: 'Sugerencias',
            link: '/',
          },
        ],
      },
      {
        name: 'Trabaja con nosotros',
        link: '/admin/workwithus',
      },
      {
        name: 'Configuración',
        link: '/settings',
        items: [
          {
            name: 'Normativas',
            link: '/',
          },
          {
            name: 'Planes',
            link: '/admin/settings/newplans',
          },
          {
            name: 'Cupón de descuento',
            link: '/admin/settings/Coupon',
          },
          {
            name: 'Preguntas frecuentes',
            link: '/admin/settings/Questions',
          },
          {
            name: 'Capacidad',
            link: '/admin/settings/Capacity',
          },
        ],
      },
    ],
  }),
  computed: {
    ...mapGetters('appMenu', ['isMenuOpen']),
  },
  methods: {
    ...mapActions('appMenu', ['showMenu']),
    closeMenu() {
      this.showMenu(false)
    },
  },
}
</script>