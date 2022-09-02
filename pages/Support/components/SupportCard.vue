<template>
    <div class="w-full">
        <div class="w-full mx-auto">
            <nuxt-link :to="path" class="w-full">
                <button
                    class="flex flex-col items-center justify-center w-full h-32 border-2 rounded sm:w-72 sm:h-32 border-lightBlue"
                >
                    <div class="w-9 h-11">
                        <Icons :name="icon" class="text-yellow" />
                    </div>
                    <p class="mt-3 text-center text-white">
                        {{ name }}
                    </p>
                </button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: false,
        },
    },
}
</script>
