<template>
  <div class="w-full px-2 py-1 flex justify-between items-center mb-4">
    <button
      v-if="hasItems"
      :to="itemMenu.link"
      class="text-white font-principal"
      @click="goTo(itemMenu.link)"
    >
      {{ itemMenu.name }}
    </button>
    <button
      v-else
      @click="showItems"
      class="w-full flex flex-col justify-center items-center"
    >
      <div
        class="w-full flex justify-between items-center text-white py-1 pr-2"
        :class="{ 'bg-white rounded-lg text-appBackground': isOpen }"
      >
        <p class="font-principal">
          {{ itemMenu.name }}
        </p>
        <div class="w-5 h-5 flex justify-center items-center">
          <icons
            :name="arrowDisplay"
            class="text-white font-principal"
            :class="{ 'bg-white rounded-lg text-appBackground': isOpen }"
          />
        </div>
      </div>
      <div v-if="isOpen" class="flex flex-col items-start p-2 my-3">
        <button
          v-for="(item, i) in itemMenu.items"
          :key="i"
          :to="item.link"
          class="mb-3 text-white font-principal"
          :class="{ 'text-yellow': isPath(item) }"
          @click="goTo(item.link)"
        >
          {{ item.name }}
        </button>
      </div>
    </button>
  </div>
</template>

<script>
import Icons from '~/components/global/Icons.vue'

export default {
  components: { Icons },
  props: {
    itemMenu: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isOpen: false,
  }),
  computed: {
    arrowDisplay() {
      return this.isOpen ? 'arrowDown' : 'arrowRight'
    },
    hasItems() {
      return !this.itemMenu.hasOwnProperty('items')
    },
  },
  methods: {
    showItems() {
      this.isOpen = !this.isOpen
    },
    isPath(item) {
      return this.$route.path.split('/').pop() === item.link
    },
    goTo(item) {
      this.$router.push(item)
      this.$emit('close-menu')
    },
  },
}
</script>