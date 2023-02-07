<template>
    <div class="w-full">
        <Update />
        <Benefits />
        <PhoneCallToAction />
    </div>
</template>

<script>
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
import Update from '~/components/Forms/update.vue'
export default {
    components: { Benefits, PhoneCallToAction, Update },
}
</script>
