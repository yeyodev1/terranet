<template>
    <div id="form" class="w-full">
        <div class="w-4/5 mx-auto mt-14 sm:mt-24">
            <h4
                class="text-2xl font-bold text-center text-white sm:text-3xl font-principal"
            >
                Contratar servicio
            </h4>
            <form class="max-w-6xl mx-auto mt-11">
                <div class="flex flex-wrap mt-6 sm:mt-8 sm:justify-between">
                    <!-- user option of plan -->
                    <div class="flex flex-col items-start justify-start w-full">
                        <label
                            for="plan"
                            class="w-full mb-3 text-base font-bold text-white sm:w-1/5 font-principal sm:mb-0"
                        >
                            Plan ideal:
                        </label>
                        <div
                            class="w-full px-3 py-3 border rounded-md border-lightBlue"
                        >
                            <div
                                class="flex items-center justify-between w-full"
                            >
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
                            <div class="flex flex-col" :class="homePlans">
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
                    <!-- NUMBER ID OF THE USERS -->
                    <div
                        class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8 sm:w-2/5 sm:justify-between"
                    >
                        <label
                            for="userId"
                            class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0"
                        >
                            Cédula
                        </label>
                        <input
                            type="number"
                            id="userId"
                            v-model="userId"
                            required
                            placeholder="Número de cédula"
                            class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input"
                        />
                    </div>
                    <!-- USER'S NAME -->
                    <div
                        class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8 sm:w-2/5 sm:justify-between"
                    >
                        <label
                            for="userName"
                            class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="userName"
                            v-model="userName"
                            required
                            placeholder="Nombre completo"
                            class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input"
                        />
                    </div>
                    <!-- USER'S EMAIL -->
                    <div
                        class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8 sm:w-2/5 sm:justify-between"
                    >
                        <label
                            for="userEmail"
                            class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0"
                        >
                            Correo
                        </label>
                        <input
                            type="email"
                            id="userEmail"
                            v-model="userEmail"
                            required
                            placeholder="ejemplo@nmail.com"
                            class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input"
                        />
                    </div>
                    <!-- USER'S PHONE -->
                    <div
                        class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8 sm:w-2/5 sm:justify-between"
                    >
                        <label
                            for="userPhone"
                            class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0"
                        >
                            Télefono
                        </label>
                        <input
                            type="number"
                            id="userPhone"
                            v-model="userPhone"
                            required
                            placeholder="Número de télefono"
                            class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input"
                        />
                    </div>
                    <!-- USERS ADRESS -->
                    <div
                        class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8"
                    >
                        <label
                            for="userAdress"
                            class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0"
                        >
                            Dirección
                        </label>
                        <input
                            type="text"
                            id="userAdress"
                            placeholder="Dirección de domicilio"
                            required
                            class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input"
                        />
                    </div>
                    <!-- DETAIL ADRESS   -->
                    <div
                        class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8"
                    >
                        <label
                            for="adressDetail"
                            class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0"
                        >
                            Detalle de domicilio
                        </label>
                        <input
                            type="text"
                            id="adressDetail"
                            placeholder="Casa amarilla, frente al parque."
                            required
                            class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input"
                        />
                    </div>
                    <!-- REFERENCIES SECTION     -->
                    <div
                        class="flex flex-wrap items-start justify-start w-full mt-6 sm:justify-between sm:mt-8"
                    >
                        <P
                            class="w-full text-base font-bold text-white border-b font-principal sm:text-2xl border-lightBlue"
                        >
                            Referencia
                        </P>
                        <!-- NAME SECTION  -->
                        <div class="w-full mt-7 sm:w-2/5">
                            <label
                                for="userName"
                                class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0"
                            >
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="userName"
                                placeholder="Casa amarilla, frente al parque."
                                required
                                class="w-full px-3 py-3 mt-1 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input"
                            />
                        </div>
                        <!-- PHONE SECTION -->
                        <div class="w-full mt-7 sm:w-2/5">
                            <label
                                for="userPhone"
                                class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0"
                            >
                                Teléfono
                            </label>
                            <input
                                type="number"
                                id="userPhone"
                                placeholder="Número de teléfono"
                                required
                                class="w-full px-3 py-3 mt-1 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input"
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div>
                <ButtonForm />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ButtonForm from './buttonForm.vue'
export default {
    components: { ButtonForm },
    data: () => ({
        arrowDown: 'arrowDown',
        //CAPTURING USER INFORMATION
        userId: '',
        userName: '',
        userEmail: '',
        userPhone: '',
        userAdress: '',
    }),
    computed: {
        ...mapGetters('plans', ['getPlans']),
        ...mapGetters('form', ['showForm']),
        homePlans() {
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

<style scoped>
.background-input {
    background: none;
}
</style>
