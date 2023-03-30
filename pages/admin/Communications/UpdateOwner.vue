<template>
    <app-layout>
        <app-title title="Actualización de datos" class="mt-4" />
        <div
            v-if="getRequestedUpdates.length"
            class="w-full flex flex-col justify-center items-center mt-4"
        >
            <div
                v-for="(owner, index) in getRequestedUpdates"
                :key="index"
                class="w-full flex flex-col border border-lightBlue p-4 mb-2 rounded-lg"
            >
                <div class="w-full flex justify-evenly items-start flex-wrap">
                    <div class="w-full md:w-2/5 flex flex-col items-start mt-2">
                        <app-title title="Datos previos" class="mt-4" />
                        <div class="w-full flex justify-start items-center">
                            <p class="text-white font-bold mr-2">Nombres:</p>
                            <p class="text-white font-light mr-2">
                                {{ owner.previousData.names }}
                            </p>
                        </div>
                        <div class="w-full flex justify-start items-center">
                            <p class="text-white font-bold mr-2">Cédula:</p>
                            <p class="text-white font-light mr-2">
                                {{ owner.previousData.id }}
                            </p>
                        </div>
                        <div class="w-full flex justify-start items-center">
                            <p class="text-white font-bold mr-2">Email:</p>
                            <p class="text-white font-light mr-2">
                                {{ owner.previousData.email }}
                            </p>
                        </div>
                        <div class="w-full flex justify-start items-center">
                            <p class="text-white font-bold mr-2">Dirección:</p>
                            <p class="text-white font-light mr-2">
                                {{ owner.previousData.address }}
                            </p>
                        </div>
                        <div class="w-full flex justify-start items-center">
                            <p class="text-white font-bold mr-2">Teléfono:</p>
                            <p class="text-white font-light mr-2">
                                {{ owner.previousData.phoneNumber }}
                            </p>
                        </div>
                    </div>
                    <div class="w-full md:w-2/5 flex flex-col">
                        <app-title title="Nuevos datos" class="mt-4" />
                        <div class="w-full flex flex-col items-start mt-2">
                            <div class="w-full flex justify-start items-center">
                                <p class="text-white font-bold mr-2">
                                    Nombres:
                                </p>
                                <p class="text-white font-light mr-2">
                                    {{ owner.newData.names }}
                                </p>
                            </div>
                            <div class="w-full flex justify-start items-center">
                                <p class="text-white font-bold mr-2">Cédula:</p>
                                <p class="text-white font-light mr-2">
                                    {{ owner.newData.id }}
                                </p>
                            </div>
                            <div class="w-full flex justify-start items-center">
                                <p class="text-white font-bold mr-2">Email:</p>
                                <p class="text-white font-light mr-2">
                                    {{ owner.newData.email }}
                                </p>
                            </div>
                            <div class="w-full flex justify-start items-center">
                                <p class="text-white font-bold mr-2">
                                    Dirección:
                                </p>
                                <p class="text-white font-light mr-2">
                                    {{ owner.newData.address }}
                                </p>
                            </div>
                            <div class="w-full flex justify-start items-center">
                                <p class="text-white font-bold mr-2">
                                    Teléfono:
                                </p>
                                <p class="text-white font-light mr-2">
                                    {{ owner.newData.phoneNumber }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="border border-yellow rounded-md px-2 py-1 text-white mt-3"
                    @click="openModal(owner._id)"
                >
                    Eliminar
                </button>
                <deleting-modal
                    :isOpen="isOpen"
                    @close-modal="closeModal(owner._id)"
                    @deleting-selected-comment="deleteComment()"
                />
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
        ...mapGetters('updateOwner', ['getRequestedUpdates']),
    },
    mounted() {
        if (!this.getRequestedUpdates.length) {
            this.fetchRequestedUpdates()
        }
    },
    methods: {
        ...mapActions('updateOwner', [
            'fetchRequestedUpdates',
            'deleteRequestedUpdates',
        ]),
        openModal(id) {
            this.isOpen = true
            this.deletingId = id
        },
        deleteComment() {
            this.deleteRequestedUpdates(this.deletingId)
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
