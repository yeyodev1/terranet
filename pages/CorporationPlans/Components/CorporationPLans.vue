<template>
    <div class="background">
        <p
            class="pt-10 text-2xl font-bold text-center text-white font-principal sm:text-5xl"
        >
            Plan corporativo
        </p>
        <p
            class="pt-6 text-base text-center text-white font-principal sm:text-2xl sm:pt-12"
        >
            ¡Déjanos tus datos y recibe asesoría para el plan ideal!
        </p>
        <CorporationForm />
        <CorporationDevices />
        <Benefits />
    </div>
</template>

<script>
import CorporationForm from '../../../components/Forms/corporationForm.vue'
import CorporationDevices from '../../../components/Plans/CorporationDevices.vue'
import Benefits from '~/components/Home/Benefits.vue'
import Footer from '~/components/global/The/Footer.vue'

export default {
    components: {
        CorporationForm,
        CorporationDevices,
        Benefits,
        Footer,
    },
}
</script>
