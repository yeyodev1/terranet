<template>
    <div
        class="flex flex-wrap items-center justify-center w-full p-3 mt-6 rounded-md relative bg-blue lg:justify-evenly"
    >
        <button
            v-if="isInAdmin"
            class="w-5 h-5 flex justify-center items-center absolute -top-2 -right-2 bg-red rounded-full"
            @click="deleteCoupon(question.id)"
        >
            <icons name="close" class="text-white" />
        </button>
        <div class="flex items-center justify-between w-full px-3">
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
    computed: {
        isInAdmin() {
            return this.$route.fullPath.includes('/admin')
        },
    },
    methods: {
        showAnswer() {
            this.isOpen = !this.isOpen
        },
        deleteCoupon(id) {
            this.$emit('delete-question')
        },
    },
}
</script>
