<template>
    <div
        class="flex flex-wrap items-center justify-center w-full p-3 mt-6 rounded-md bg-blue lg:justify-evenly"
    >
        <div class="flex items-center justify-center">
            <p class="text-sm font-bold text-white font-principal">
                {{ question.question }}
            </p>
            <button
                class="flex items-center justify-center w-9 h-w-9"
                @click="showAnswer"
            >
                <Icons class="w-full h-w-9 text-yellow" :name="arrowDown" />
            </button>
        </div>
        <div v-if="isOpen" class="p-4">
            <p
                class="text-base text-center text-white sm:text-left font-principal"
            >
                {{ question.answer }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        question: {
            type: Object,
            required: true,
        },
    },
    data: () => ({
        arrowDown: 'arrowDown',
        isOpen: false,
    }),
    methods: {
        showAnswer() {
            this.isOpen = !this.isOpen
        },
    },
}
</script>
