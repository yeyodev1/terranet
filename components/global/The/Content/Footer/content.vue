<template>
    <div class="w-full flex flex-col justify-start items-center">
        <p class="w-full text-xl font-bold text-blue">
            {{ linkSection.title }}
        </p>
        <div class="w-full flex flex-col">
            <a
                v-for="(link, index) in linkSection.links"
                :key="index"
                target="_blank"
                :href="link.url"
                class="w-full mt-3 text-xl text-black transition-border"
            >
                {{ link.name }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        linkSection: {
            type: Object,
            required: true,
        },
    },
}
</script>
