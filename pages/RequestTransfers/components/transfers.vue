<template>
    <div class="w-full">
        <HomeTranfer />
        <Benefits />
        <PhoneCallToAction />
    </div>
</template>

<script>
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
import HomeTranfer from '../../../components/Require/HomeTranfer.vue'
export default {
    components: { Benefits, PhoneCallToAction, HomeTranfer },
}
</script>
