<template>
  <header class="w-full border-b border-lightBlue ">
    <div class="w-full max-w-screen-xl flex justify-between items-center mx-auto px-4 py-2">
      <button @click="showMenu" class="w-8 h-8 flex justify-center items-center">
        <icons name="TheMenu" class="text-white" />
      </button>
      <img src="@/static/Logos/LogoHeader.png" alt="terranet" class="w-32" />
      <button @click="logout" class="flex justify-center items-center px-2 py-1 rounded-lg bg-yellow font-principal">
        Salir
      </button>
    </div>
  </header>
</template>

<script>
import Icons from '@/components/global/Icons.vue'

export default {
  components : {
    Icons
  },
  methods: {
    logout() {
      console.log('estamos vivos desde el logout')
    },
    showMenu() {
      console.log('estamos vivos desde el menu')
    }
  }
}
</script>
  
