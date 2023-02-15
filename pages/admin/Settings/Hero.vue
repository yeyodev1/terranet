<template>
    <app-layout>
        <app-title title="Portada" class="mt-4" />
        <div class="border border-lightBlue rounded-lg mt-6 p-6">
            <button
                class="w-full flex justify-between items-center"
                @click="showCard"
            >
                <p class="text-lg font-bold font-primary text-white">
                    Subir imágen
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
                    <div
                        class="w-full flex flex-col justify-center items-start"
                    >
                        <label class="text-white font-primary text-lg mb-3"
                            >Subir Archivos
                        </label>
                        <button
                            class="relative p-2 border border-lightBlue rounded-lg"
                        >
                            <div
                                class="mock flex justify-start items-center w-full"
                            >
                                <div
                                    class="w-5 h-5 flex justify-center items-center"
                                >
                                    <icons name="upload" class="text-white" />
                                </div>
                                <p class="text-white ml-2">
                                    Seleccionar archivo
                                </p>
                            </div>
                            <input
                                type="file"
                                class="opacity-0 input-scale"
                                @change="onImageChange"
                            />
                        </button>
                        <div
                            v-if="image.url.length"
                            class="w-16 h-16 flex justify-center items-center mt-2"
                        >
                            <img
                                :src="image.url"
                                alt=""
                                class="w-16 h-16 object-cover"
                            />
                        </div>
                    </div>
                </div>
                <button
                    @click="setImage"
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
            v-if="getHero.length"
            class="mt-4 flex p-4 justify-center items-center border border-lightBlue rounded-lg"
        >
            <img :src="getHero" class="mx-auto w-4/5" />
        </div>
    </app-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppLayout from '~/components/App/components/AppLayout.vue'
import AppTitle from '~/components/App/components/AppTitle.vue'
import icons from '@/components/global/Icons.vue'

export default {
    layout: 'app',
    components: { AppLayout, AppTitle, icons },
    data: () => ({
        isOpen: false,
        isEditing: false,
        image: {
            url: '',
            object: '',
        },
    }),
    computed: {
        ...mapGetters('hero', ['getHero']),
        arrowDisplay() {
            return !this.isOpen ? 'arrowDown' : 'close'
        },
        isFormValid() {
            return this.image.object instanceof File
        },
    },
    mounted() {
        if (!this.getHero.length) {
            this.fetchHero()
        }
    },
    methods: {
        ...mapActions('hero', ['fetchHero', 'setHero']),
        showCard() {
            this.isOpen = !this.isOpen
        },
        onImageChange(e) {
            const file = e.target.files[0]
            const imageObject = file
            const imageUrl = URL.createObjectURL(file)
            this.image.url = imageUrl
            this.image.object = imageObject
        },
        setImage() {
            const fd = new FormData()
            fd.append('hero', this.image.object)
            this.setHero(fd)
            this.image = {
                url: '',
                object: '',
            }
        },
    },
}
</script>

<style scoped>
.input-sacle {
    transform: scale(5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
}
.mock {
    position: absolute;
    z-index: 3;
    pointer-events: none;
    cursor: pointer;
}
</style>
