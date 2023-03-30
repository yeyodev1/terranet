<template>
  <div class="w-full mt-8 border-2 border-white rounded-2xl">
    <div class="flex items-start justify-start pt-8 px-7">
      <p class="pr-4 text-5xl font-bold text-center text-white font-principal">
        2
      </p>
      <p class="text-base font-bold text-white text-start font-principal">
        {{ quiz.question }}
      </p>
    </div>
    <div class="flex flex-col items-center justify-center pt-20 pb-16">
      <button class="w-4/5 mt-5 font-semibold text-white border rounded-md border-yellow"
        :class="{ 'bg-yellow text-black': isSelected(option.option) }" v-for="(option, index) in quiz.options"
        :key="index" @click.prevent="getItem(option.option)">
        {{ option.option }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    selectedItem: '',
    items: []
  }),
  methods: {
    getItem(item) {
      const idx = this.items.findIndex(element => element === item);
      if (idx === -1) {
        this.items.push(item)
      } else {
        this.items.splice(idx, 1)
      }
      this.$emit('options', this.items)
    },
    isSelected(item) {
      return this.items.includes(item)
    },
  },
}
</script>
