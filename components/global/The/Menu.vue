<template>
    <div
        class="fixed top-0 z-30 w-full h-screen transition-all duration-300 background-menu"
        :class="isShown"
    >
        <header
            class="flex items-center justify-end w-full pt-4 pb-2 pr-6 border-b-2 border-lightBlue"
        >
            <button class="w-7 h-7" @click="closeMenu">
                <Icons class="w-full text-white h-7" :name="close" />
            </button>
        </header>
        <div
            class="flex flex-col items-center justify-center w-4/5 mx-auto mt-10"
        >
            <div>
                <img
                    src="@/static/Logos/LogoHeader.png"
                    alt="Logo de Terranet"
                />
            </div>
            <div
                class="flex flex-col"
                v-for="(item, index) in menu"
                :key="index"
            >
                <nuxt-link :to="item.link">
                    <button
                        class="pt-12 text-base text-white font-principal sm:text-2xl"
                        @click="closeMenu"
                    >
                        {{ item.name }}
                    </button>
                </nuxt-link>
            </div>
            <div class="mt-16">
                <nuxt-link to="/hireservice">
                    <button
                        class="px-6 py-3 text-base font-bold text-white border rounded-md sm:text-2xl font-principal border-yellow"
                        @click="closeMenu"
                    >
                        Contrata tu servicio
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Icons from '../Icons.vue'
export default {
    components: {
        Icons,
    },
    data: () => ({
        close: 'close',
        menu: [
            {
                name: 'inicio',
                link: '/',
            },
            {
                name: 'Planes',
                link: '/#plans',
            },
            {
                name: 'Medios de pago',
                link: '/waystopay',
            },
            {
                name: 'Atención al cliente',
                link: '/support',
            },
        ],
    }),
    computed: {
        ...mapGetters('menu', ['showMenu']),
        isShown() {
            return !this.showMenu ? 'left-full' : 'left-0'
        },
    },
    methods: {
        ...mapActions('menu', ['activeMenu']),
        closeMenu() {
            if (this.showMenu) {
                this.activeMenu(false)
            }
        },
    },
}
</script>

<style scoped>
.background-menu {
    background-image: url('@/static/Backgrounds/Background-2.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
