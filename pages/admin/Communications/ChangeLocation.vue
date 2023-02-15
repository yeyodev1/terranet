<template>
    <app-layout>
        <app-title title="Traslados" class="mt-4" />
        <div
            v-if="getChangeLocation.length"
            class="w-full flex flex-col justify-center items-center mt-4"
        >
            <div
                v-for="(owner, index) in getChangeLocation"
                :key="index"
                class="w-full flex flex-col border border-lightBlue p-4 mb-2 rounded-lg"
            >
                <div class="w-full flex justify-evenly items-start flex-wrap">
                    <div class="w-full flex flex-col">
                        <app-title
                            :title="`Cédula del cliente ${owner.idUser}`"
                            class="mt-4"
                        />
                        <div class="w-full flex flex-col items-start mt-2">
                            <div
                                class="w-full flex justify-start items-center mb-2"
                            >
                                <p class="text-white font-bold mr-2">
                                    Dirección actual:
                                </p>
                                <p class="text-white font-light mr-2">
                                    {{ owner.address1 }}
                                </p>
                            </div>
                            <div
                                class="w-full flex justify-start items-center mb-2"
                            >
                                <p class="text-white font-bold mr-2">
                                    Nueva dirección:
                                </p>
                                <p class="text-white font-light mr-2">
                                    {{ owner.address2 }}
                                </p>
                            </div>
                            <div
                                v-if="owner.gpsLocation !== undefined"
                                class="w-full flex justify-start items-center mb-2"
                            >
                                <p class="text-white font-bold mr-2">
                                    Ubicación GPS:
                                </p>
                                <p class="text-white font-light mr-2">
                                    {{ owner?.gpsLocation.latitude }}
                                </p>
                                <p class="text-white font-light mr-2">
                                    {{ owner?.gpsLocation.longitude }}
                                </p>
                            </div>
                            <div
                                class="w-full flex justify-start items-center mb-2"
                            >
                                <p class="text-white font-bold mr-2">
                                    Referencia:
                                </p>
                                <p class="text-white font-light mr-2">
                                    {{ owner.reference }}
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
        ...mapGetters('changeLocation', ['getChangeLocation']),
    },
    mounted() {
        if (!this.getChangeLocation.length) {
            this.fetchChangeLocation()
        }
    },
    methods: {
        ...mapActions('changeLocation', [
            'fetchChangeLocation',
            'deleteChangeLocation',
        ]),
        openModal(id) {
            this.isOpen = true
            this.deletingId = id
        },
        deleteComment() {
            this.deleteChangeLocation(this.deletingId)
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
