<template>
    <app-layout>
        <app-title title="Preguntas frecuentes" class="mt-4" />
        <div v-if="isEditing" class="w-full flex justify-end items-center my-3">
            <button
                @click="createNewPlan"
                class="w-28 rounded-lg flex justify-center items-center text-appBackground py-1 mt-4 bg-yellow"
            >
                Crear Pregunta
            </button>
        </div>
        <div class="border border-lightBlue rounded-lg mt-6 p-6">
            <button
                class="w-full flex justify-between items-center"
                @click="showCard"
            >
                <p class="text-lg font-bold font-primary text-white">
                    {{ isQuestionSelected }}
                </p>
                <div class="w-5 h-5 flex justify-center items-center">
                    <icons
                        :name="arrowDisplay"
                        class="text-yellow font-principal"
                    />
                </div>
            </button>
            <div v-if="isOpen" class="w-full flex flex-col justify-start mt-6">
                <div
                    class="w-full flex flex-col justify-between items-center pl-1"
                >
                    <div class="w-full flex justify-start items-center">
                        <label class="text-white font-primary text-lg mr-1"
                            >Nombre:
                        </label>
                        <input
                            v-model="question"
                            placeholder="Ingresa su pregunta"
                            type="text"
                            class="text-white outline-none w-full border-b border-lightBlue px-1 bg-appBackground"
                        />
                    </div>
                    <div class="w-full flex justify-start items-start mt-6">
                        <label class="text-white font-primary text-lg mr-1"
                            >Respuesta:
                        </label>
                        <textarea
                            v-model="answer"
                            placeholder="Escribe tu respuesta"
                            type="text"
                            class="text-white outline-none border-b border-lightBlue px-1 bg-appBackground w-full h-14"
                        />
                    </div>
                </div>
                <button
                    @click="saveQuestion"
                    class="w-28 rounded-lg flex justify-center items-center text-appBackground py-1 mt-4"
                    :class="{
                        'bg-yellow': isFormValid,
                        'bg-grey': !isFormValid,
                    }"
                >
                    Guardar
                </button>
            </div>
        </div>
        <div
            v-if="getFrequentQuestion.length"
            class="flex flex-wrap items-baseline justify-center w-4/5 max-w-6xl mx-auto mt-6 sm:justify-around sm:mt-9 lg:mt-12"
        >
            <question
                v-for="(question, index) in getFrequentQuestion"
                class="flex w-full"
                :key="index"
                :question="question"
                @delete-question="removeQuestion(question._id)"
            />
        </div>
    </app-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'
import icons from '@/components/global/Icons.vue'
import Question from '@/components/FrequentQuestions/Question.vue'

export default {
    layout: 'app',
    components: {
        AppLayout,
        AppTitle,
        icons,
        Question,
    },
    data: () => ({
        isOpen: false,
        isEditing: false,
        question: '',
        answer: '',
        selectedQuestion: {},
    }),
    computed: {
        ...mapGetters('frequentQuestion', ['getFrequentQuestion']),
        arrowDisplay() {
            return !this.isOpen ? 'arrowDown' : 'close'
        },
        isQuestionSelected() {
            return Object.keys(this.selectedQuestion).length
                ? 'Editar Pregunta'
                : 'Crear Pregunta'
        },
        isFormValid() {
            return this.question !== '' && this.answer !== ''
        },
    },
    mounted() {
        if (!this.getFrequentQuestion.length) {
            this.fetchQuestions()
        }
    },
    methods: {
        ...mapActions('frequentQuestion', [
            'setQuestion',
            'fetchQuestions',
            'updateQuestion',
            'deleteQuestion',
        ]),
        showCard() {
            this.isOpen = !this.isOpen
        },
        resetValues() {
            this.question = ''
            this.answer = ''
        },
        saveQuestion() {
            const request = {
                question: this.question,
                answer: this.answer,
            }
            this.setQuestion(request)
        },
        removeQuestion(id) {
            this.deleteQuestion(id)
        },
    },
}
</script>
