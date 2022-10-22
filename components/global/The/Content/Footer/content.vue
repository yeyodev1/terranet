<template>
    <div class="flex flex-col items-center justify-start w-full pl-4 lg:px-5">
        <p class="w-full text-xl font-bold text-blue">
            {{ linkSection.title }}
        </p>
        <div class="flex flex-col w-full">
            <nuxt-link
                v-for="(link, index) in linkSection.links"
                :key="index"
                target="_blank"
                :to="link.url"
                class="hover:text-lightBlue w-full mt-3 text-base text-black transition-border"
            >
                {{ link.name }}
            </nuxt-link>
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
