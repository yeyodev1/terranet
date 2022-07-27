<template>
    <p class="text-white">
        {{ name }}
    </p>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
}
</script>
