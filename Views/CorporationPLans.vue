<template>
    <div class="background">
        <Header />

        <p
            class="pt-10 font-bold text-2xl text-white font-principal sm:text-5xl text-center"
        >
            Plan corporativo
        </p>
        <p
            class="text-white font-principal text-base sm:text-2xl text-center pt-6 sm:pt-12"
        >
            ¡Déjanos tus datos y recibe asesoría para el plan ideal!
        </p>
        <CorporationForm />
        <CorporationDevices />
    </div>
</template>

<script>
import Header from '~/components/global/The/Header.vue'
import CorporationForm from '../components/Forms/corporationForm.vue'
import CorporationDevices from '../components/Plans/CorporationDevices.vue'

export default {
    components: {
        Header,
        CorporationForm,
        CorporationDevices,
    },
}
</script>

<style scoped>
.background {
    background-image: url('@/static/Backgrounds/Background-2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
