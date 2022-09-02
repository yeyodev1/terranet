<template>
    <div class="w-full">
        <Capacity />
        <Benefits />
        <PhoneCallToAction />
    </div>
</template>

<script>
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
import Capacity from '~/components/capacity/capacity.vue'
export default {
    components: { Benefits, PhoneCallToAction, Capacity },
}
</script>
