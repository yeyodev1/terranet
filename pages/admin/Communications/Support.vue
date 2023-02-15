<template>
    <app-layout>
        <app-title title="Atención al cliente" class="mt-4" />
        <div
            v-if="getSupport.length"
            class="w-full flex flex-col justify-center items-center mt-4"
        >
            <div
                v-for="(support, index) in getSupport"
                :key="index"
                class="w-full flex flex-col border border-lightBlue p-4 mb-2 rounded-lg"
            >
                <div class="w-full flex flex-wrap items-start justify-between">
                    <div
                        class="w-full lg:w-3/5 flex flex-wrap justify-center items-start my-3"
                    >
                        <deleting-modal
                            :isOpen="isOpen"
                            @close-modal="closeModal(support._id)"
                            @deleting-selected-comment="deleteComment()"
                        />
                        <p
                            class="w-full md:w-1/2 lg:w-1/4 text-white font-bold mt-2"
                        >
                            Cédula
                        </p>
                        <p
                            class="w-full md:w-1/2 lg:w-1/4 text-white font-light mt-2"
                        >
                            {{ support.idUser }}
                        </p>
                        <p
                            class="w-full md:w-1/2 lg:w-1/4 text-white font-bold mt-2"
                        >
                            Nombre
                        </p>
                        <p
                            class="w-full md:w-1/2 lg:w-1/4 text-white font-light mt-2"
                        >
                            {{ support.name }}
                        </p>
                        <p
                            class="w-full md:w-1/2 lg:w-1/4 text-white font-bold mt-2"
                        >
                            Teléfono
                        </p>
                        <p
                            class="w-full md:w-1/2 lg:w-1/4 text-white font-light mt-2"
                        >
                            {{ support.phone }}
                        </p>
                        <p
                            class="w-full md:w-1/2 lg:w-1/4 text-white font-bold mt-2"
                        >
                            Correo
                        </p>
                        <p
                            class="w-full md:w-1/2 lg:w-1/4 text-white font-light mt-2"
                        >
                            {{ support.email }}
                        </p>
                    </div>
                    <div class="w-full flex flex-wrap justify-between mt-2">
                        <p class="w-full text-white font-bold">Mensaje</p>
                        <p class="w-full text-white font-light">
                            {{ support.message }}
                        </p>
                    </div>
                </div>
                <button
                    class="border border-yellow rounded-md px-2 py-1 text-white mt-3"
                    @click="openModal(support._id)"
                >
                    Eliminar
                </button>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'
import DeletingModal from '~/components/App/components/DeletingModal.vue'

export default {
    layout: 'app',
    components: {
        AppLayout,
        AppTitle,
        DeletingModal,
    },
    data: () => ({
        isOpen: false,
        deletingId: null,
    }),
    computed: {
        ...mapGetters('support', ['getSupport']),
    },
    mounted() {
        if (!this.getSupport.length) {
            this.fetchSupport()
        }
    },
    methods: {
        ...mapActions('support', ['fetchSupport', 'deleteSupport']),
        openModal(id) {
            this.isOpen = true
            this.deletingId = id
        },
        deleteComment() {
            this.deleteSupport(this.deletingId)
            this.closeModal()
        },
        closeModal() {
            this.isOpen = false
            if (this.deletingId !== null) {
                this.deletingId = null
            }
        },
    },
}
</script>
