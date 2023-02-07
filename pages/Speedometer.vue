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
    </div>
</template>

<script>
import Tips from '~/components/Speedometer/Tips.vue'
import Speedometer from '@/components/Speedometer/Speedometer.vue'

export default {
    components: {
        Tips,
        Tips,
        Speedometer,
    },
}
</script>
