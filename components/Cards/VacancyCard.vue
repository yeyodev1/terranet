<template>
    <div
        class="w-full flex flex-col justify-center items-center rounded-lg py-4 px-8 bg-blue"
    >
        <div class="w-full flex flex-wrap justify-between items-center">
            <div class="w-full md:w-2/5 flex flex-col items-start">
                <p class="text-white text-xl font-bold">
                    {{ vacancy.jobVacancy }}
                </p>
                <p class="text-white mt-2">
                    {{ vacancy.jobDescription }}
                </p>
            </div>
            <div class="w-full md:w-2/5 flex flex-col">
                <p class="text-white font-bold">Requisitos</p>
                <p
                    v-for="(requirement, index) in vacancy.jobRequirements"
                    :key="index"
                    class="text-white font-light"
                >
                    * {{ requirement }}
                </p>
            </div>
        </div>
        <div class="w-full flex justify-between items-center mt-4 mb-2">
            <button
                v-if="!isInAdmin"
                @click="openCloseApplication"
                class="px-2 py-1 border border-grey rounded text-white"
            >
                Enviar CV
            </button>
            <button
                v-if="isInAdmin"
                @click="deleteVacancy"
                class="px-2 py-1 bg-yellow rounded text-appBackground"
            >
                Eliminar
            </button>
        </div>
        <div
            v-if="formIsOpen"
            class="w-full flex justify-start items-center mt-4 mb-2"
        >
            <VacancyForm
                @close-form="openCloseApplication"
                @applicant-form="$emit('applicant-form')"
            />
        </div>
    </div>
</template>

<script>
import VacancyForm from '../Forms/VacancyForm.vue'

export default {
    components: { VacancyForm },
    props: {
        vacancy: {
            type: Object,
            required: true,
        },
    },
    data: () => ({
        formIsOpen: false,
    }),
    computed: {
        isInAdmin() {
            return this.$route.fullPath.includes('/admin')
        },
    },
    methods: {
        deleteVacancy() {
            this.$emit('delete-vacancy', this.vacancy._id)
        },
        openCloseApplication() {
            this.formIsOpen = !this.formIsOpen
        },
    },
}
</script>
