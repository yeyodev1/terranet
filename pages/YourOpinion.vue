<template>
    <div class="w-full">
        <UserOpinion />
        <Benefits />
        <PhoneCallToAction />
    </div>
</template>

<script>
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
import UserOpinion from '~/components/Forms/userOpinion.vue'
export default {
    components: { Benefits, PhoneCallToAction, UserOpinion },
}
</script>
