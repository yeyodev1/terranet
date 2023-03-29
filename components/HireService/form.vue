<template>
  <div id="form" class="w-full">
    <div class="w-4/5 mx-auto mt-14 sm:mt-24">
      <h4 class="text-2xl font-bold text-center text-white sm:text-3xl font-principal">
        Contratar servicio
      </h4>
      <form class="max-w-6xl mx-auto mt-11">
        <div class="flex flex-wrap mt-6 sm:mt-8 sm:justify-between">
          <!-- user option of plan -->
          <div class="flex flex-col items-start justify-start w-full">
            <label for="plan" class="w-full mb-3 text-base font-bold text-white sm:w-1/5 font-principal sm:mb-0">
              Plan ideal:
            </label>
            <div class="w-full px-3 py-3 border rounded-md border-lightBlue">
              <template v-if="!Object.keys(selectedPlan).length">
                <select v-model="plan" required class="w-full select">
                  <option class="text-white">
                    Seleccion tú plan
                  </option>
                  <option v-for="(plan, index) in getPlans" :key="index"
                    class="flex justify-between text-white items-center w-full">
                    <p>{{ plan.planName }}</p>
                    <p>$ {{ plan.price }}</p>
                  </option>
                </select>
              </template>
              <template v-else>
                <input v-model="selectedPlan.planName" class="w-full px-3 py-3 text-white background-input">
              </template>
            </div>
          </div>
          <!-- NUMBER ID OF THE USERS -->
          <div class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8 sm:w-2/5 sm:justify-between">
            <label for="userId" class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0">
              Cédula
            </label>
            <input id="userId" v-model="userId" required placeholder="Número de cédula"
              class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input" />
          </div>
          <!-- USER'S NAME -->
          <div class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8 sm:w-2/5 sm:justify-between">
            <label for="userName" class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0">
              Nombre
            </label>
            <input type="text" id="userName" v-model="userName" required placeholder="Nombre completo"
              class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input" />
          </div>
          <!-- USER'S EMAIL -->
          <div class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8 sm:w-2/5 sm:justify-between">
            <label for="userEmail" class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0">
              Correo
            </label>
            <input type="email" id="userEmail" v-model="userEmail" required placeholder="ejemplo@nmail.com"
              class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input" />
          </div>
          <!-- USER'S PHONE -->
          <div class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8 sm:w-2/5 sm:justify-between">
            <label for="userPhone" class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0">
              Télefono
            </label>
            <input type="number" id="userPhone" v-model="userPhone" required placeholder="Número de télefono"
              class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input" />
          </div>
          <!-- USERS ADDRESS -->
          <div class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8">
            <label for="userAdress" class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0">
              Dirección
            </label>
            <input type="text" id="userAdress" v-model="userAdress" placeholder="Dirección de domicilio" required
              class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input" />
          </div>
          <!-- DETAIL ADRESS   -->
          <div class="flex flex-col items-start justify-start w-full mt-6 sm:mt-8">
            <label for="adressDetail" class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0">
              Detalle de domicilio
            </label>
            <input type="text" v-model="userDetailAdress" id="adressDetail" placeholder="Casa amarilla, frente al parque."
              required
              class="w-full px-3 py-3 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input" />
          </div>
          <!-- REFERENCIES SECTION     -->
          <div class="flex flex-wrap items-start justify-start w-full mt-6 sm:justify-between sm:mt-8">
            <p class="w-full text-base font-bold text-white border-b font-principal sm:text-2xl border-lightBlue">
              Referencia
            </p>
            <!-- NAME SECTION  -->
            <div class="w-full mt-7 sm:w-2/5">
              <label for="userName" class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0">
                Nombre
              </label>
              <input type="text" id="userName" placeholder="Nombre Completo" required v-model="contactUser"
                class="w-full px-3 py-3 mt-1 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input" />
            </div>
            <!-- PHONE SECTION -->
            <div class="w-full mt-7 sm:w-2/5">
              <label for="userPhone" class="w-full mb-3 text-base font-bold text-white font-principal sm:mb-0">
                Teléfono
              </label>
              <input type="number" id="userPhone" placeholder="Número de teléfono" required v-model="contactPhone"
                class="w-full px-3 py-3 mt-1 text-white border rounded-md outline-none placeholder:text-white placeholder:font-principal placeholder:text-sm font-principal border-lightBlue background-input" />
            </div>
          </div>
        </div>
      </form>
      <div class="w-full">
        <div class="flex flex-col items-center justify-center w-full max-w-lg pb-5 mx-auto mt-12 sm:w-1/2 sm:mt-11">
          <button class="flex items-center w-full justify-evenly" @click="isCouponDisplay = !isCouponDisplay">
            <h4 class="text-xs text-white sm:text-base font-principal">
              ¿Tienes algún código de descuento?, Utilízalo
            </h4>
            <Icons class="h-4 text-yellow sm:h-6" :name="isPresset" />
          </button>
        </div>
        <div v-if="Object.keys(showCoupon).length" class="justify-center items-center" :class="showInput">
          <Coupon :name="showCoupon.promotionCode" :discount="showCoupon.discountPercentage" :id="showCoupon._id" />
        </div>
        <p v-if="isCouponRight" class="text-red text-sm">
          {{ wrongCouponMessage }}
        </p>
        <div class="flex items-center justify-center w-full max-w-4xl pb-5 mx-auto mt-12" :class="showInput">
          <h5 class="text-xs font-bold text-white sm:whitespace-nowrap sm:text-base font-principal">
            Ingresar código:
          </h5>
          <input type="text" placeholder="CÓDIGO" v-model="coupon"
            class="py-3 pl-3 pr-3 ml-2 text-white border rounded-md outline-none sm:w-full placeholder:text-white placeholder:font-principal border-lightBlue background-input" />
        </div>
        <Success :is-open="successOpen" :get-success="successMessage" @close-success="successOpen = false" />
        <Warning :is-open="warningOpen" :get-error="warningMessage" @close-warning="warningOpen = false" />
        <div class="flex items-center justify-center mt-10 mb-6">
          <button type="submit" class="px-6 py-3 text-base border rounded-md font-principal" @click="sentData"
            :disabled="!formIsValid" :class="isButtonActive">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Icons from '../global/Icons.vue'
import Coupon from '../Coupon/Coupon.vue'
import Success from '../global/Success.vue'
import Warning from '../global/Warning.vue'

export default {
  components: { Icons, Coupon, Success, Warning },
  data: () => ({
    arrowDown: 'arrowDown',
    arrowUp: 'arrowUp',
    //CAPTURING USER INFORMATION
    plan: '',
    userId: '',
    userName: '',
    userEmail: '',
    userPhone: '',
    userAdress: '',
    contactUser: '',
    contactPhone: '',
    userDetailAdress: '',
    coupon: '',
    isCouponDisplay: false,
    wrongCouponMessage: 'Por favor ingresa el código correctamente',
    successOpen: false,
    successMessage: 'Felicitaciones tu solicitud fue enviada correctamente. Soporte se contactará contigo.',
    warningOpen: false,
    warningMessage: 'Ooops, algo ocurrió. Contacta por teléfono, soporte estará arreglando este error pronto.',
  }),
  computed: {
    ...mapGetters('plans', ['getPlans', 'selectedPlan']),
    ...mapGetters('form', ['showForm']),
    ...mapGetters('coupon', ['showCoupon']),
    homePlans() {
      if (this.showForm) {
        return 'flex'
      } else {
        return 'hidden'
      }
    },
    isPresset() {
      // if (!this.isCouponDisplay) {
      //   return 'arrowDown'
      // } else {
      //   return 'arrowUp'
      // }
      return !this.isCouponDisplay ? 'arrowDown' : 'arrowUp'
    },
    showInput() {
      // if (this.isCouponDisplay) {
      //   return 'flex'
      // } else {
      //   return 'hidden'
      // }
      return this.isCouponDisplay ? 'flex' : 'hidden';
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
    isCouponRight() {
      if (!Object.keys(this.showCoupon).length) {
        return false
      }
      return this.coupon !== this.showCoupon?.promotionCode && this.coupon.length !== this.showCoupon?.promotionCode.length && this.coupon.length;
    }
  },
  mounted() {
    if (!Object.keys(this.showCoupon).length) {
      this.getCoupon()
    }
  },
  methods: {
    ...mapActions('form', ['activeForm']),
    ...mapActions('coupon', ['getCoupon']),
    showHomePlans() {
      if (this.showForm) {
        this.activeForm(false)
      } else {
        this.activeForm(true)
      }
    },
    ...mapActions('coupon', ['activeCoupon']),
    async sentData() {
      try {
        const couponCode = this.applyCoupon()
        const request = {
          plan: this.plan,
          discountCode: couponCode,
          ci: this.userId,
          name: this.userName,
          email: this.userEmail,
          phone: this.userPhone,
          address: this.userAddress,
        }
        await axios.post(
          `${process.env.NUXT_API}api/hiringPlan`,
          request
        )
        this.successOpen = true;
        this.resetValues()
      } catch (e) {
        this.warningOpen = true;
        console.error(e)
      }
    },
    applyCoupon() {
      if (Object.keys(this.showCoupon).length && this.plan.length) {
        return this.showCoupon.discountPercentage + '%'
      } else {
        return 'No Codigo de descuento'
      }
    }
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
