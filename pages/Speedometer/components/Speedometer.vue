<template>
    <div class="w-full background">
        <div class="w-4/5 mx-auto sm:pt-20">
            <p
                class="pt-12 text-2xl font-bold text-center text-white font-principal sm:text-5xl"
            >
                Test de velocidad
            </p>
        </div>
        <Speedometer />
        <Tips />
        <Benefits />
        <PhoneCallToAction />
    </div>
</template>

<script>
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
import Benefits from '~/components/Home/Benefits.vue'
import Tips from '~/components/Speedometer/Tips.vue'
import Speedometer from '@/components/Speedometer/Speedometer.vue'

export default {
    components: {
        Tips,
        PhoneCallToAction,
        Benefits,
        Tips,
        Speedometer,
    },
}
</script>
