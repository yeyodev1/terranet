<template>
  <div class="w-40 lg:w-64 border-r border-lightBlue p-4 min-h-screen">
    <div class="flex flex-col justify-start items-center">
      <menu-toggle v-for="(item, i) in menu" :key="i" :itemMenu="item" />
    </div>
  </div>
</template>


<script>
import MenuToggle from '@/components/App/components/MenuToggle.vue'
export default {
  components: { MenuToggle },
  data: () => ({
    menu: [
      {
        name: 'Contratación y pagos',
        link: '/'
      }, 
      {
        name: 'Comunicación',
        link: '/',
        items: [
          { 
            name: 'Atención al cliente',
            link: '/'
          },
          { 
            name: 'Cambio de titular',
            link: '/'
          },
          { 
            name: 'Actualización de datos',
            link: '/'
          },
          { 
            name: 'Traslados',
            link: '/'
          },
          { 
            name: 'Sugerencias',
            link: '/'
          },
        ]
      }, 
      {
        name: 'Trabaja con nosotros',
        link: '/'
      }, 
      {
        name: 'Configuración',
        link: '/',
        items: [
          { 
            name: 'Normativas',
            link: '/'
          },
          { 
            name: 'Planes',
            link: '/'
          },
          { 
            name: 'Cupón de descuento',
            link: '/'
          },
          { 
            name: 'Preguntas frecuentes',
            link: '/'
          },
          { 
            name: 'Capacidad',
            link: '/'
          },
        ]
      }, 
    ]
  })
}
</script>