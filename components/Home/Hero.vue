<template>
    <div class="w-full border-b-2 border-white">
        <!-- MAIN IDEA  -->
        <div class="w-4/5 mx-auto lg:mt-32 sm:mt-24">
            <div class="w-full mt-8">
                <p
                    class="font-principal text-2xl font-bold text-white sm:text-4xl"
                >
                    Internet 100% fibra <br class="sm:hidden" />
                    óptica
                </p>
            </div>
            <div class="w-full mb-2">
                <p
                    class="font-principal font-semibold text-xs text-white sm:text-2xl"
                >
                    Sin límites para tu hogar <br class="sm:hidden" />
                    y negocio
                </p>
            </div>
        </div>
        <div class="mx-auto w-4/5 flex justify-between max-w-7xl">
            <div>
                <div
                    v-for="(trait, index) in traits"
                    :key="index"
                    class="flex flex-col"
                >
                    <div class="flex justify-center items-center">
                        <Plus class="pr-1" />
                        <p
                            class="font-principal text-xs sm:text-3xl text-white"
                        >
                            {{ trait.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="">
                <Man class="sm:hidden" />
                <img
                    src="@/static/Man/Capa2.png"
                    alt="hombre en computadora super loco"
                    class="hidden sm:flex"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Man from '../global/The/Svg/Man.vue'
import Plus from '../global/The/Svg/Plus.vue'

export default {
    components: {
        Man,
        Plus,
    },
    data: () => ({
        traits: [
            {
                name: 'Rápido',
            },
            {
                name: 'Estable',
            },
            {
                name: 'Seguro',
            },
        ],
    }),
}
</script>
