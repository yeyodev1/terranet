<template>
    <div class="w-full pb-8 pt-11 md:pt-16 md:pb-16">
        <div class="mx-auto max-w-7xl">
            <p
                class="text-2xl font-bold text-center text-white font-principal sm:text-5xl"
            >
                Preguntas frecuentes
            </p>
            <p
                class="text-base text-center text-grey font-pricipal sm:text-3xl"
            >
                Parece que alguien ya hizo esa pregunta
            </p>
        </div>
        <div
            class="flex flex-wrap items-baseline justify-center w-4/5 max-w-6xl mx-auto mt-6 sm:justify-around sm:mt-9 lg:mt-12"
        >
            <div
                class="flex w-full sm:w-5/12"
                v-for="(question, index) in getFrequentQuestion"
                :key="index"
            >
                <Question :question="question" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Icons from '../global/Icons.vue'
import Question from './Question.vue'
export default {
    components: { Icons, Question },
    computed: {
        ...mapGetters('frequentQuestion', ['getFrequentQuestion']),
    },
    mounted() {
        if (!this.getFrequentQuestion.length) {
            this.fetchQuestions()
        }
    },
    methods: {
        ...mapActions('frequentQuestion', ['fetchQuestions']),
    },
}
</script>
