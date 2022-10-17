<template>
  <div
    v-if="isOpen"
    class="fixed top-0 left-0 right-0 bottom-0 z-0"
    @click="close"
  >
    <layout-background />
    <div
      class="
        relative
        top-64
        left-1/3
        w-1/3
        h-72
        rounded-lg
        z-20
        p-4
        bg-appBackground
        opacity-100
      "
    >
      <div class="w-full h-64 flex flex-col">
        <div class="w-full flex justify-end items-center">
          <button
            class="w-5 h-5 flex justify-center items-center"
            @click="close"
          >
            <icons name="close" class="text-yellow" />
          </button>
        </div>
        <div
          class="
            w-full
            h-60
            flex flex-col
            justify-between
            pt-16
            pb-10
            px-3
            items-end
          "
        >
          <p class="w-full text-white text-center font-bold">
            ¿Deseas eliminar el mensaje del cliente?
          </p>
          <button
            class="rounded-md py-1 px-2 bg-yellow text-appBackground"
            @click="confirming()"
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '~/components/global/Icons.vue'
import LayoutBackground from '@/components/App/components/LayoutBackground.vue'

export default {
  components: {
    Icons,
    LayoutBackground,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close-modal')
    },
    confirming() {
      this.$emit('deleting-selected-comment')
      this.close()
    },
  },
}
</script>
