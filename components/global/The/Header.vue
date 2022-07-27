<template>
    <header class="w-full bg-black">
        <div class="w-full flex justify-between py-5 lg:hidden">
            <div class="w-16 flex items-center justify-center px-5">
                <LogoHeader />
            </div>
            <div class="flex justify-center items-center pr-6">
                <button class="w-6 h-6">
                    <Icons class="w-full h-6 text-white" :name="menu" />
                </button>
            </div>
        </div>
        <div class="w-full hidden lg:flex bg-black">
            <div class="w-32 flex items-center justify-center px-5">
                <LogoHeader class="" />
            </div>
            <!-- <div>
                <nuxt-link
                    :to="item.link"
                    v-for="(item, index) in menu"
                    :key="index"
                >
                    <TheTextStyle :name="item.name"> </TheTextStyle>
                </nuxt-link>
            </div> -->
        </div>
    </header>
</template>

<script>
import Icons from '../Icons.vue'
import LogoHeader from './Logos/LogoHeader.vue'

export default {
    components: {
        Icons,
        LogoHeader,
    },
    data: () => ({
        menu: 'menu',
    }),
}
</script>
