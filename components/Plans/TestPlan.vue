<template>
    <div class="flex flex-col items-center justify-center w-full pt-12">
        <p
            class="px-4 text-2xl font-bold text-center text-white font-principal sm:text-3xl sm:px-0"
        >
            ¿Aún no sabes qué plan necesitas?
        </p>
        <p class="text-base text-center text-white font-principal sm:text-2xl">
            Te ayudamor a elegir tu plan ideal
        </p>
        <button
            class="flex items-center justify-center w-12 h-12"
            @click="showTestPlan"
        >
            <Icons class="text-yellow" :name="isPresset" />
        </button>
        <div class="px-2 py-2">
            <form class="px-2 py-2">
                <!-- NAME SECTION  -->
                <div  class="w-full flex flex-col mb-"></div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Icons from '../global/Icons.vue'
export default {
    components: { Icons },

    computed: {
        // GETTING STATE FROM FORM STORE
        ...mapGetters('form', ['showForm']),
        //GETTING ICONS ACCORDING TO THE STATE OF THE STORE FROM STORE
        isPresset() {
            if (!this.showForm) {
                return 'arrowDown'
            } else {
                return 'arrowUp'
            }
        },
    },

    methods: {
        ...mapActions('form', ['activeForm']),
        showTestPlan() {
            if (this.showForm) {
                this.activeForm(false)
            } else {
                this.activeForm(true)
            }
        },
    },
}
</script>
