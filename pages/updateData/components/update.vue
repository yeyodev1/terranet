<template>
    <div class="w-full">
        <Benefits />
        <PhoneCallToAction />
    </div>
</template>

<script>
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
export default {
    components: { Benefits, PhoneCallToAction },
}
</script>
