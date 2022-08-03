<template>
    <Home />
</template>

<script>
import Home from '@/Views/Home.vue'

export default {
    name: 'IndexPage',
    components: {
        Home,
    },
}
</script>

<style>
@font-face {
    font-family: 'FontJek';
    font-display: swap;
    src: url('@/assets/fonts/Fontjek.otf') format('truetype');
}

@font-face {
    font-family: 'FontJek';
    font-display: swap;
    src: url('@/assets/fonts/Fontjek.ttf') format('truetype');
}
</style>
