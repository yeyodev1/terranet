<template>
    <header class="w-full border-b-2 border-solid border-lightBlue">
        <!-- HEADER UNTIL BEFORE LG DEVICES -->
        <div class="flex justify-between w-full py-5 lg:hidden">
            <div
                class="flex items-center justify-center w-16 px-5"
            >
                <LogoHeader />
            </div>
            <div class="flex items-center justify-center pr-6">
                <button class="w-6 h-6" @click="getMenu">
                    <Icons class="w-full h-6 text-white" :name="TheMenu" />
                </button>
            </div>
        </div>
        <!-- HEADER SINCE LG DEVICES -->
        <div class="justify-between hidden w-full max-w-6xl mx-auto lg:flex">
            <nuxt-link to="/" class="flex items-center justify-center w-32 pt-6 pb-5">
                <img
                    class=""
                    src="@/static/Logos/LogoHeader.png"
                    alt="Super logo de la muerte"
                />
            </nuxt-link>
            <div class="flex items-center justify-between w-5/6 mx-11">
                <nuxt-link
                    v-for="(item, index) in menu"
                    :key="index"
                    :to="item.link"
                    class="relative"
                    @click="redirection(item)"
                >
                    <TheTextStyle class="font-principal" :name="item.name">
                    </TheTextStyle>
                </nuxt-link>
            </div>
            <div class="flex items-center justify-center pr-3">
                <nuxt-link to="/hireservice">
                    <button
                        class="py-3 text-lg text-white border rounded-md font-principal border-yellow w-52"
                    >
                        Contrata tu servicio
                    </button>
                </nuxt-link>
            </div>
        </div>
    </header>
</template>

<script>
import { mapActions } from 'vuex'
import Icons from '../Icons.vue'
import LogoHeader from './Logos/LogoHeader.vue'

export default {
    components: {
        Icons,
        LogoHeader,
    },
    data: () => ({
        TheMenu: 'TheMenu',
        menu: [
            {
                name: 'Inicio',
                link: '/',
            },
            {
                name: 'Planes',
                link: '/#plans',
            },
            {
                name: 'Medios de pago',
                link: '/WaysToPay',
            },
            {
                name: 'Atencion al cliente',
                link: '/support',
            },
        ],
        plansOpen: false,
    }),
    methods: {
        redirection(item) {
            if (item.name === 'Planes') {
                this.plansOpen = true
            } else {
                this.$router.push(`${item.link}`)
            }
        },
        ...mapActions('menu', ['activeMenu']),
        getMenu() {
            this.activeMenu(true)
        },
        goToHome() {
            this.$router.push('/')
        }
    },
}
</script>
