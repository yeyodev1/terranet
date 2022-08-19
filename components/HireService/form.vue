<template>
    <div id="form" class="w-full">
        <div class="w-4/5 mx-auto mt-14 sm:mt-24">
            <h4
                class="text-2xl font-bold text-center text-white sm:text-3xl font-principal"
            >
                Contratar servicio
            </h4>
            <form class="max-w-2xl mx-auto mt-11">
                <div class="flex flex-wrap items-center">
                    <p
                        class="w-full mb-3 text-base font-bold text-white sm:text-center sm:w-1/5 font-principal sm:mb-0"
                    >
                        Plan ideal:
                    </p>
                    <div
                        class="w-full px-3 py-3 border rounded-md sm:w-4/5 border-lightBlue"
                    >
                        <div class="flex items-center justify-between w-full">
                            <p
                                class="text-xs text-white sm:text-sm font-principal sm:w-1/2"
                            >
                                Seleccionar plan
                            </p>
                            <button
                                class="w-4 h-4 sm:w-6"
                                @click.prevent="showHomePlans"
                            >
                                <Icons
                                    class="w-full h-4 text-yellow sm:h-6"
                                    :name="arrowDown"
                                />
                            </button>
                        </div>
                        <div class="flex flex-col" :class="getHomePlans">
                            <div
                                class="flex w-full"
                                v-for="(homeplan, index) in getPlans"
                                :key="index"
                            >
                                <button
                                    class="flex items-center justify-between w-full px-3 py-3 hover:bg-lightBlue"
                                >
                                    <p
                                        class="text-xs text-white sm:text-sm font-principal"
                                    >
                                        {{ homeplan.title }}
                                    </p>
                                    <p
                                        class="text-xs text-white sm:text-sm font-principal"
                                    >
                                        {{ homeplan.price }}
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Icons from '../global/Icons.vue'
export default {
    components: {
        Icons,
    },
    data: () => ({
        arrowDown: 'arrowDown',
    }),
    computed: {
        ...mapGetters('plans', ['getPlans']),
        ...mapGetters('form', ['showForm']),
        getHomePlans() {
            if (this.showForm) {
                return 'flex'
            } else {
                return 'hidden'
            }
        },
    },
    methods: {
        ...mapActions('form', ['activeForm']),
        showHomePlans() {
            if (this.showForm) {
                this.activeForm(false)
            } else {
                this.activeForm(true)
            }
        },
    },
}
</script>
