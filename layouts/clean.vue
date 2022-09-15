<template>
    <div
        class="flex flex-col justify-start w-full min-h-screen bg-appBackground"
    >
        <header
            class="flex items-center justify-center w-full max-w-screen-lg px-4 py-2 mx-auto bg-blue"
        >
            <nuxt-link to="/" class="w-32">
                <img src="@/static/Logos/LogoHeader.png" alt="terranet" />
            </nuxt-link>
        </header>
        <nuxt />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('user', ['getUser']),
    },
    watch: {
        getUser(value) {
            if (value !== null) {
                this.$router.push('/admin/communications/ChangeLocation')
            }
        },
    },
}
</script>
