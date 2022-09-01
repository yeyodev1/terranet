<template>
    <div class="w-full">
        <ChangeOwner />
        <Benefits />
        <PhoneCallToAction />
    </div>
</template>

<script>
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
import ChangeOwner from '~/components/Forms/changeOwner.vue'
export default {
    components: { Benefits, PhoneCallToAction, ChangeOwner },
}
</script>
