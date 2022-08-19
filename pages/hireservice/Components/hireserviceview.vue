<template>
    <div>
        <Form />
        <Benefits />
        <PhoneCallToAction />
    </div>
</template>

<script>
import Benefits from '~/components/Home/Benefits.vue'
import PhoneCallToAction from '~/components/Home/PhoneCallToAction.vue'
import Form from '~/components/HireService/form.vue'
export default {
    components: {
        Benefits,
        PhoneCallToAction,
        Form,
    },
}
</script>
