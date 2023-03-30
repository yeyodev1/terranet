<template>
  <div id="testplan" class="flex flex-col items-center justify-center w-full pt-12">
    <p class="px-4 mt-12 text-2xl font-bold text-center text-white sm:mt-20 font-principal sm:text-3xl sm:px-0">
      ¿Aún no sabes qué plan necesitas?
    </p>
    <p class="text-base text-center text-white font-principal sm:text-2xl">
      Te ayudamor a elegir tu plan ideal
    </p>
    <button class="flex items-center justify-center w-12 h-12 mb-8" @click="showTestPlan">
      <Icons class="text-yellow" :name="isPresset" />
    </button>
    <div class="flex flex-wrap items-center justify-center w-full px-2 py-2">
      <form class="flex flex-wrap w-4/5 lg:mb-8 justify-evenly" :class="getForm">
        <div class="sm:w-2/5">
          <QuestionPlan :quiz="quiz" @option="firstOption" />
        </div>
        <div class="sm:w-2/5">
          <SecondQuestionPlan :quiz="quiz2" @options="secondOption" />
        </div>
        <div class="sm:w-2/5">
          <TestingCard :selectedPlan="getBetterPlan" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Icons from '../global/Icons.vue'
import QuestionPlan from '../Cards/QuestionPlan.vue'
import Speedometer from '../global/The/Svg/Speedometer.vue'
import TestingCard from './TestingCard.vue'
import SecondQuestionPlan from '../Cards/SecondQuestionPlan.vue'
export default {
  components: {
    Icons,
    Speedometer,
    TestingCard,
    QuestionPlan,
    SecondQuestionPlan,
  },
  data: () => ({
    quiz: {
      questionNumber: '1',
      question: 'Cantidad de dispositivos que se conectan a tu red',
      options: [
        {
          option: '1 - 5',
        },
        {
          option: '6 - 10',
        },
        {
          option: '11 +',
        },
      ],
    },
    quiz2: {
      questionNumber: '2',
      question: 'Actividades realizas con tu internet.',
      options: [
        {
          option: 'Redes sociales',
        },
        {
          option: 'Juegos en línea',
        },
        {
          option: 'Música en línea',
        },
        {
          option: 'Videoconferencias',
        },
        {
          option: 'Streaming ',
        },
        {
          option: 'Otros',
        },
      ],
    },
    planRequeriments: {
      devices: null,
      activities: null
    }
  }),
  computed: {
    // GETTING STATE FROM FORM STORE
    ...mapGetters('form', ['showForm']),
    ...mapGetters('plans', ['getPlans']),
    //GETTING ICONS ACCORDING TO THE STATE OF THE STORE FROM STORE
    isPresset() {
      if (!this.showForm) {
        return 'arrowDown'
      } else {
        return 'arrowUp'
      }
    },
    // OPEN FORM ACCORDING TO THE FORM STATE FROM STORE
    getForm() {
      if (this.showForm) {
        return 'flex'
      } else {
        return 'hidden'
      }
    },
    getBetterPlan() {
      const devices = this.planRequeriments.devices
      const activities = this.planRequeriments.activities
      if (devices === null && activities === null) {
        return 'No plan'
      } else if (devices === this.quiz.options[0].option) {
        return this.getPlans[0]
      } else if (devices === this.quiz.options[1].option) {
        return this.getPlans[1]
      } else if (devices === this.quiz.options[2].option && activities.includes('Streaming')) {
        return this.getPlans[2]
      } else {
        return this.getPlans[0]
      }
    }
  },
  methods: {
    ...mapActions('form', ['activeForm']),
    showTestPlan() {
      if (this.showForm) {
        this.activeForm(false)
      } else {
        this.activeForm(true)
      }
    },
    firstOption(value) {
      this.planRequeriments.devices = value
    },
    secondOption(value) {
      console.log(value)
      this.planRequeriments.activities = value
    }
  },
}
</script>
