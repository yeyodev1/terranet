<template>
  <app-layout>
    <app-title title="Cambio de titular" class="mt-4" />
    <div
      v-if="getChangeOwners.length"
      class="w-full flex flex-col justify-center items-center mt-4"
    >
      <div
        v-for="(owner, index) in getChangeOwners"
        :key="index"
        class="w-full flex flex-col border border-lightBlue p-4 mb-2 rounded-lg"
      >
        <div class="w-full flex justify-evenly items-start flex-wrap">
          <div class="w-full md:w-2/5 flex flex-col">
            <app-title title="Titular actual" class="mt-4" />
            <div class="w-full flex flex-col items-start mt-2">
              <div class="w-full flex justify-start items-center">
                <p class="text-white font-bold mr-2">Nombre:</p>
                <p class="text-white font-light mr-2">
                  {{ owner.previousOwner.names }}
                </p>
              </div>
              <div class="w-full flex justify-start items-center">
                <p class="text-white font-bold mr-2">Apellido:</p>
                <p class="text-white font-light mr-2">
                  {{ owner.previousOwner.lastNames }}
                </p>
              </div>
              <div class="w-full flex justify-start items-center">
                <p class="text-white font-bold mr-2">Nombre:</p>
                <p class="text-white font-light mr-2">
                  {{ owner.previousOwner.id }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-2/5 flex flex-col">
            <app-title title="Nuevo titular" class="mt-4" />
            <div class="w-full flex flex-col items-start mt-2">
              <div class="w-full flex justify-start items-center">
                <p class="text-white font-bold mr-2">Nombre:</p>
                <p class="text-white font-light mr-2">
                  {{ owner.newOwner.names }}
                </p>
              </div>
              <div class="w-full flex justify-start items-center">
                <p class="text-white font-bold mr-2">Apellido:</p>
                <p class="text-white font-light mr-2">
                  {{ owner.newOwner.lastNames }}
                </p>
              </div>
              <div class="w-full flex justify-start items-center">
                <p class="text-white font-bold mr-2">Nombre:</p>
                <p class="text-white font-light mr-2">
                  {{ owner.newOwner.id }}
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
    ...mapGetters('changeOwner', ['getChangeOwners']),
  },
  mounted() {
    if (!this.getChangeOwners.length) {
      this.fetchChangeOwners()
    }
  },
  methods: {
    ...mapActions('changeOwner', ['fetchChangeOwners', 'deleteChangeOwner']),
    openModal(id) {
      this.isOpen = true
      this.deletingId = id
    },
    deleteComment() {
      this.deleteChangeOwner(this.deletingId)
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