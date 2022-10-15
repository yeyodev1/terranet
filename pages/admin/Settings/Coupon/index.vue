<template>
  <app-layout>
    <template>
      <app-title title="Cupón de descuento" class="mt-4" />
      <div class="flex flex-col items-center w-full">
        <div class="w-full border border-lightBlue rounded-lg mt-6 p-6">
          <button
            class="w-full flex justify-between items-center"
            @click="showCard"
          >
            <p class="text-lg font-bold font-primary text-white">
              Editar Cupón
            </p>
            <div class="w-5 h-5 flex justify-center items-center">
              <icons :name="arrowDisplay" class="text-yellow font-principal" />
            </div>
          </button>
          <div v-if="isOpen" class="w-full flex flex-col justify-start mt-6">
            <div
              class="w-full flex flex-wrap justify-between items-center pl-1"
            >
              <div
                class="
                  w-full
                  sm:w-1/2
                  lg:w-1/4
                  flex
                  justify-start
                  items-center
                  mt-2
                  lg:mt-0
                "
              >
                <label class="text-white font-primary text-lg mr-1"
                  >Nombre del Codigo:
                </label>
                <input
                  v-model="name"
                  placeholder="Terranet 2020"
                  type="text"
                  class="
                    text-white
                    outline-none
                    border-b border-lightBlue
                    w-36
                    px-1
                    bg-appBackground
                  "
                />
              </div>
              <div
                class="
                  w-full
                  sm:w-1/2
                  lg:w-1/5
                  flex
                  justify-start
                  items-center
                  mt-2
                  lg:mt-0
                "
              >
                <label class="text-white font-primary text-lg mr-1"
                  >Porcentaje:
                </label>
                <input
                  v-model="discount"
                  placeholder="00"
                  type="text"
                  class="
                    text-white
                    outline-none
                    border-b border-lightBlue
                    px-1
                    bg-appBackground
                    w-9
                  "
                />
              </div>
            </div>
            <button
              @click="setCoupon"
              class="
                w-28
                rounded-lg
                flex
                justify-center
                items-center
                text-appBackground
                py-1
                mt-4
              "
              :class="{ 'bg-yellow': isFormValid, 'bg-grey': !isFormValid }"
            >
              Guardar
            </button>
          </div>
        </div>
        <div
          v-if="Object.keys(showCoupon).length"
          class="w-full mt-8 flex justiify-center items-center"
        >
          <Coupon
            class="mx-auto"
            :name="showCoupon.promotionCode"
            :discount="showCoupon.discountPercentage"
            :id="showCoupon._id"
            @delete-coupon="removeCoupon(showCoupon._id)"
          />
        </div>
      </div>
    </template>
  </app-layout>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'
import icons from '@/components/global/Icons.vue'

export default {
  layout: 'app',
  components: { AppLayout, AppTitle, icons },
  data: () => ({
    isOpen: false,
    name: '',
    discount: '',
    promotionCode: {},
  }),
  computed: {
    ...mapGetters('coupon', ['showCoupon']),
    arrowDisplay() {
      return !this.isOpen ? 'arrowDown' : 'close'
    },
    isFormValid() {
      return this.name !== '' && this.discount !== ''
    },
    getPromotion() {
      return Object.keys(this.promotionCode).length
    },
  },
  mounted() {
    if (!Object.keys(this.promotionCode).length) {
      this.getCoupon()
    }
  },
  methods: {
    ...mapActions('coupon', ['saveCoupon', 'getCoupon', 'deleteCoupon']),
    resetValues() {
      this.name = ''
      this.discount = ''
    },
    showCard() {
      this.isOpen = !this.isOpen
    },
    async setCoupon() {
      try {
        const request = {
          promotionCode: this.name,
          discountPercentage: this.discount,
        }
        if (
          this.showCoupon !== undefined &&
          Object.keys(this.showCoupon).length
        ) {
          const id = this.showCoupon._id
          this.deleteCoupon(id)
        }
        this.saveCoupon(request)
        this.resetValues()
      } catch (e) {
        console.error(e)
      }
    },
    async removeCoupon(id) {
      try {
        const response = await axios.delete(
          `${process.env.NUXT_API}api/promotionCode/${id}`,
          {
            headers: {
              Authorization: JSON.parse(localStorage.getItem('token')),
            },
          }
        )
        this.deleteCoupon()
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>