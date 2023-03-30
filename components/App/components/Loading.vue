<template>
    <div v-if="isOpen" class="fixed top-0 left-0 right-0 bottom-0 z-0">
        <layout-background />
        <div
            class="relative top-64 left-1/3 w-1/3 h-72 rounded-lg z-20 p-4 bg-appBackground opacity-100"
        >
            <div class="w-full h-64 flex flex-col">
                <div
                    class="w-full h-60 flex flex-col justify-between pt-16 pb-10 px-3 items-end"
                >
                    <p
                        class="w-full font-open text-lg text-white text-center font-bold"
                    >
                        Cargando ...
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icons from '~/components/global/Icons.vue'
import LayoutBackground from '@/components/App/components/LayoutBackground.vue'

export default {
    components: {
        Icons,
        LayoutBackground,
    },
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
}
</script>
