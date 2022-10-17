<template>
  <app-layout>
    <app-title title="Contratación y pagos" class="mt-4" />
    <div class="my-2">Aqui se sube el archivo</div>
    <div>Aui va la tabla</div>
  </app-layout>
</template>

<script>
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'

export default {
  layout: 'app',
  components: {
    AppLayout,
    AppTitle,
  },
  data: () => ({}),
}
</script>