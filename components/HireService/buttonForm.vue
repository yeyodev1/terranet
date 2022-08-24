<template>
    <div class="w-full">
        <div
            class="flex flex-col items-center justify-center w-full max-w-lg pb-5 mx-auto mt-12 sm:w-1/2 sm:mt-11"
        >
            <button
                class="flex items-center w-full justify-evenly"
                @click="setCoupon"
            >
                <h4 class="text-xs text-white sm:text-base font-principal">
                    ¿Tienes algún código de descuento
                </h4>
                <Icons class="h-4 text-yellow sm:h-6" :name="isPresset" />
            </button>
        </div>
        <div
            class="flex items-center justify-center w-full max-w-4xl pb-5 mx-auto mt-12"
            :class="showInput"
        >
            <h5
                class="text-xs font-bold text-white sm:whitespace-nowrap sm:text-base font-principal"
            >
                Ingresar código:
            </h5>
            <input
                type="text"
                placeholder="CÓDIGO"
                class="py-3 pl-3 pr-3 ml-2 text-white border rounded-md outline-none sm:w-full placeholder:text-white placeholder:font-principal border-lightBlue background-input"
            />
        </div>
        <div class="flex items-center justify-center mt-10 mb-6">
            <nuxt-link to="/datasent">
                <button
                    class="px-6 py-3 text-base text-white border rounded-md hover:text-black hover:bg-yellow border-yellow font-principal"
                >
                    Enviar
                </button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Icons from '../global/Icons.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: { Icons },
    data: () => ({
        arrowDown: 'arrowDown',
        arrowUp: 'arrowUp',
    }),
    computed: {
        ...mapGetters('coupon', ['putCoupon']),
        isPresset() {
            if (!this.putCoupon) {
                return 'arrowDown'
            } else {
                return 'arrowUp'
            }
        },
        showInput() {
            if (this.putCoupon) {
                return 'flex'
            } else {
                return 'hidden'
            }
        },
    },
    methods: {
        ...mapActions('coupon', ['activeCoupon']),
        setCoupon() {
            if (this.putCoupon) {
                this.activeCoupon(false)
            } else {
                this.activeCoupon(true)
                console.log('hola')
            }
        },
    },
}
</script>

<style scoped>
.background-input {
    background: none;
}
</style>
