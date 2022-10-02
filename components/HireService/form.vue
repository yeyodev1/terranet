<template>
  <div id="form" class="w-full">
    <div class="w-4/5 mx-auto mt-14 sm:mt-24">
      <h4
        class="
          text-2xl
          font-bold
          text-center text-white
          sm:text-3xl
          font-principal
        "
      >
        Contratar servicio
      </h4>
      <form class="max-w-6xl mx-auto mt-11">
        <div class="flex flex-wrap mt-6 sm:mt-8 sm:justify-between">
          <!-- user option of plan -->
          <div class="flex flex-col items-start justify-start w-full">
            <label
              for="plan"
              class="
                w-full
                mb-3
                text-base
                font-bold
                text-white
                sm:w-1/5
                font-principal
                sm:mb-0
              "
            >
              Plan ideal:
            </label>
            <div class="w-full px-3 py-3 border rounded-md border-lightBlue">
              <select required class="w-full select">
                <option class="text-white">Seleccion tú plan</option>
                <option
                  v-for="(plan, index) in getPlans"
                  :key="index"
                  class="flex justify-between text-white items-center w-full"
                >
                  <p>{{ plan.planName }}</p>
                  <p>$ {{ plan.price }}</p>
                </option>
              </select>
            </div>
          </div>
          <!-- NUMBER ID OF THE USERS -->
          <div
            class="
              flex flex-col
              items-start
              justify-start
              w-full
              mt-6
              sm:mt-8 sm:w-2/5 sm:justify-between
            "
          >
            <label
              for="userId"
              class="
                w-full
                mb-3
                text-base
                font-bold
                text-white
                font-principal
                sm:mb-0
              "
            >
              Cédula
            </label>
            <input
              id="userId"
              v-model="userId"
              required
              placeholder="Número de cédula"
              class="
                w-full
                px-3
                py-3
                text-white
                border
                rounded-md
                outline-none
                placeholder:text-white
                placeholder:font-principal
                placeholder:text-sm
                font-principal
                border-lightBlue
                background-input
              "
            />
          </div>
          <!-- USER'S NAME -->
          <div
            class="
              flex flex-col
              items-start
              justify-start
              w-full
              mt-6
              sm:mt-8 sm:w-2/5 sm:justify-between
            "
          >
            <label
              for="userName"
              class="
                w-full
                mb-3
                text-base
                font-bold
                text-white
                font-principal
                sm:mb-0
              "
            >
              Nombre
            </label>
            <input
              type="text"
              id="userName"
              v-model="userName"
              required
              placeholder="Nombre completo"
              class="
                w-full
                px-3
                py-3
                text-white
                border
                rounded-md
                outline-none
                placeholder:text-white
                placeholder:font-principal
                placeholder:text-sm
                font-principal
                border-lightBlue
                background-input
              "
            />
          </div>
          <!-- USER'S EMAIL -->
          <div
            class="
              flex flex-col
              items-start
              justify-start
              w-full
              mt-6
              sm:mt-8 sm:w-2/5 sm:justify-between
            "
          >
            <label
              for="userEmail"
              class="
                w-full
                mb-3
                text-base
                font-bold
                text-white
                font-principal
                sm:mb-0
              "
            >
              Correo
            </label>
            <input
              type="email"
              id="userEmail"
              v-model="userEmail"
              required
              placeholder="ejemplo@nmail.com"
              class="
                w-full
                px-3
                py-3
                text-white
                border
                rounded-md
                outline-none
                placeholder:text-white
                placeholder:font-principal
                placeholder:text-sm
                font-principal
                border-lightBlue
                background-input
              "
            />
          </div>
          <!-- USER'S PHONE -->
          <div
            class="
              flex flex-col
              items-start
              justify-start
              w-full
              mt-6
              sm:mt-8 sm:w-2/5 sm:justify-between
            "
          >
            <label
              for="userPhone"
              class="
                w-full
                mb-3
                text-base
                font-bold
                text-white
                font-principal
                sm:mb-0
              "
            >
              Télefono
            </label>
            <input
              type="number"
              id="userPhone"
              v-model="userPhone"
              required
              placeholder="Número de télefono"
              class="
                w-full
                px-3
                py-3
                text-white
                border
                rounded-md
                outline-none
                placeholder:text-white
                placeholder:font-principal
                placeholder:text-sm
                font-principal
                border-lightBlue
                background-input
              "
            />
          </div>
          <!-- USERS ADDRESS -->
          <div
            class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8"
          >
            <label
              for="userAdress"
              class="
                w-full
                mb-3
                text-base
                font-bold
                text-white
                font-principal
                sm:mb-0
              "
            >
              Dirección
            </label>
            <input
              type="text"
              id="userAdress"
              v-model="userAdress"
              placeholder="Dirección de domicilio"
              required
              class="
                w-full
                px-3
                py-3
                text-white
                border
                rounded-md
                outline-none
                placeholder:text-white
                placeholder:font-principal
                placeholder:text-sm
                font-principal
                border-lightBlue
                background-input
              "
            />
          </div>
          <!-- DETAIL ADRESS   -->
          <div
            class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8"
          >
            <label
              for="adressDetail"
              class="
                w-full
                mb-3
                text-base
                font-bold
                text-white
                font-principal
                sm:mb-0
              "
            >
              Detalle de domicilio
            </label>
            <input
              type="text"
              v-model="userDetailAdress"
              id="adressDetail"
              placeholder="Casa amarilla, frente al parque."
              required
              class="
                w-full
                px-3
                py-3
                text-white
                border
                rounded-md
                outline-none
                placeholder:text-white
                placeholder:font-principal
                placeholder:text-sm
                font-principal
                border-lightBlue
                background-input
              "
            />
          </div>
          <!-- REFERENCIES SECTION     -->
          <!-- <div
            class="
              flex flex-wrap
              items-start
              justify-start
              w-full
              mt-6
              sm:justify-between sm:mt-8
            "
          >
            <p
              class="
                w-full
                text-base
                font-bold
                text-white
                border-b
                font-principal
                sm:text-2xl
                border-lightBlue
              "
            >
              Referencia
            </p>
            <!-- NAME SECTION  -->
          <!-- <div class="w-full mt-7 sm:w-2/5">
              <label
                for="userName"
                class="
                  w-full
                  mb-3
                  text-base
                  font-bold
                  text-white
                  font-principal
                  sm:mb-0
                "
              >
                Nombre
              </label>
              <input
                type="text"
                id="userName"
                placeholder="Nombre Completo"
                required
                v-model="contactUser"
                class="
                  w-full
                  px-3
                  py-3
                  mt-1
                  text-white
                  border
                  rounded-md
                  outline-none
                  placeholder:text-white
                  placeholder:font-principal
                  placeholder:text-sm
                  font-principal
                  border-lightBlue
                  background-input
                "
              />
            </div> -->
          <!-- PHONE SECTION -->
          <!-- <div class="w-full mt-7 sm:w-2/5">
              <label
                for="userPhone"
                class="
                  w-full
                  mb-3
                  text-base
                  font-bold
                  text-white
                  font-principal
                  sm:mb-0
                "
              >
                Teléfono
              </label>
              <input
                type="number"
                id="userPhone"
                placeholder="Número de teléfono"
                required
                v-model="contactPhone"
                class="
                  w-full
                  px-3
                  py-3
                  mt-1
                  text-white
                  border
                  rounded-md
                  outline-none
                  placeholder:text-white
                  placeholder:font-principal
                  placeholder:text-sm
                  font-principal
                  border-lightBlue
                  background-input
                "
              />
            </div> -->
          <!-- </div> -->
        </div>
      </form>
      <div class="w-full">
        <div
          class="
            flex flex-col
            items-center
            justify-center
            w-full
            max-w-lg
            pb-5
            mx-auto
            mt-12
            sm:w-1/2 sm:mt-11
          "
        >
          <button
            class="flex items-center w-full justify-evenly"
            @click="setCoupon"
          >
            <h4 class="text-xs text-white sm:text-base font-principal">
              ¿Tienes algún código de descuento
            </h4>
            <Icons class="h-4 text-yellow sm:h-6" :name="isPresset" />
          </button>
        </div>
        <div
          class="
            flex
            items-center
            justify-center
            w-full
            max-w-4xl
            pb-5
            mx-auto
            mt-12
          "
          :class="showInput"
        >
          <h5
            class="
              text-xs
              font-bold
              text-white
              sm:whitespace-nowrap sm:text-base
              font-principal
            "
          >
            Ingresar código:
          </h5>
          <input
            type="text"
            placeholder="CÓDIGO"
            class="
              py-3
              pl-3
              pr-3
              ml-2
              text-white
              border
              rounded-md
              outline-none
              sm:w-full
              placeholder:text-white placeholder:font-principal
              border-lightBlue
              background-input
            "
          />
        </div>
        <div class="flex items-center justify-center mt-10 mb-6">
          <button
            type="submit"
            class="px-6 py-3 text-base border rounded-md font-principal"
            @click="sentData"
            :disabled="!formIsValid"
            :class="isButtonActive"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icons from '../global/Icons.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { Icons },
  data: () => ({
    arrowDown: 'arrowDown',
    arrowUp: 'arrowUp',
    //CAPTURING USER INFORMATION

    userId: '',
    userName: '',
    userEmail: '',
    userPhone: '',
    userAdress: '',
    contactUser: '',
    contactPhone: '',
    userDetailAdress: '',
  }),
  computed: {
    ...mapGetters('plans', ['getPlans']),
    ...mapGetters('form', ['showForm']),
    homePlans() {
      if (this.showForm) {
        return 'flex'
      } else {
        return 'hidden'
      }
    },
    ...mapGetters('coupon', ['putCoupon']),
    isPresset() {
      if (!this.putCoupon) {
        return 'arrowDown'
      } else {
        return 'arrowUp'
      }
    },
    showInput() {
      if (this.putCoupon) {
        return 'flex'
      } else {
        return 'hidden'
      }
    },
    // Validating form has information fron sending
    formIsValid() {
      return (
        this.userId != '' &&
        this.userName != '' &&
        this.userEmail != '' &&
        this.userPhone != '' &&
        this.userAdress != '' &&
        this.contactUser != '' &&
        this.contactPhone != ''
      )
    },
    // VALIDATING FORM WITH CLASSES
    isButtonActive() {
      return this.formIsValid === true
        ? 'border-yellow text-white hover:text-black hover:bg-yellow'
        : 'border-grey text-grey'
    },
  },
  methods: {
    ...mapActions('form', ['activeForm']),
    showHomePlans() {
      if (this.showForm) {
        this.activeForm(false)
      } else {
        this.activeForm(true)
      }
    },
    ...mapActions('coupon', ['activeCoupon']),
    setCoupon() {
      if (this.putCoupon) {
        this.activeCoupon(false)
      } else {
        this.activeCoupon(true)
      }
    },
    async sentData() {
      try {
        console.log(
          this.userId,
          this.userName,
          this.userEmail,
          this.userPhone,
          this.userAdress,
          this.contactUser,
          this.contactPhone
        )
        const request = {
          plan: {
            name: 'Super Plan',
            price: 35.9,
            speed: 60,
          },
          discountCode: '',
          ci: '0845621783',
          name: 'Roberto Sola',
          email: 'robertsol@gmail.com',
          phone: '0989347458',
          address: 'Coop. Los Vergeles',
        }
        const response = await axios.post()
        console.log(response.data.data)
        this.$router.push('/datasent')
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
.background-input {
  background: none;
}
.select {
  background: none;
  color: #fafbff;
  outline: none;
}
</style>
