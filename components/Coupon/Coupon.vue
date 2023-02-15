<template>
    <div>
        <div class="flex mx-auto mt-12 rounded-lg background relative">
            <button
                v-if="isInAdmin"
                class="w-5 h-5 flex justify-center items-center absolute -top-2 -right-2 bg-red rounded-full"
                @click="deleteCoupon(id)"
            >
                <icons name="close" class="text-white" />
            </button>
            <div
                class="flex flex-col items-center justify-center w-1/2 py-3 sm:w-3/5 sm:py-6"
            >
                <p class="text-xs text-center text-white font-principal">
                    Código de descuento:
                </p>
                <p
                    class="text-base font-bold text-center uppercase text-yellow font-principal sm:text-2xl"
                >
                    {{ name }}
                </p>
                <p class="text-xs text-center text-white font-principal">
                    *Válido para clientes nuevos
                </p>
            </div>

            <div class="flex items-center justify-center w-1/2 sm:w-2/5">
                <p class="text-3xl text-center font-secondary text-yellow">
                    {{ discount }}% Descuento
                </p>
            </div>
        </div>
        <div
            v-if="!isInAdmin"
            class="flex items-center justify-center mt-12 mb-7"
        >
            <button
                class="px-6 py-3 text-base font-semibold text-white border rounded-md border-yellow"
            >
                Utilizar
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Icons from '../global/Icons.vue'

export default {
    components: { Icons },
    props: {
        name: {
            type: String,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        isInAdmin() {
            return this.$route.fullPath.includes('/admin')
        },
    },
    methods: {
        deleteCoupon(id) {
            this.$emit('delete-coupon')
        },
    },
}
</script>

<style scoped>
.background {
    background-image: url('@/static/Backgrounds/Coupon/background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
@font-face {
    font-family: 'FontJek';
    font-display: swap;
    src: url('@/assets/fonts/Fontjek.ttf') format('truetype');
}
</style>
