<template>
    <button
        class="flex flex-col items-center justify-center w-32 h-32 border-2 rounded sm:w-72 sm:h-32 border-lightBlue"
    >
        <div class="w-9 h-11">
            <Icons :name="icon" class="text-yellow" />
        </div>
        <p class="mt-3 text-center text-white">
            {{ name }}
        </p>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
}
</script>
