<template>
    <footer class="w-full p-6 bg-white">
        <div class="max-w-7xl mx-auto">
            <img src="@/static/Logos/LogoFooter.png" alt="" />
        </div>

        <div
            class="flex flex-col md:flex-row justify-between lg:px-6 max-w-7xl mx-auto"
        >
            <!-- CALL CENTER -->
            <div>
                <p class="text-xl font-bold text-blue">Atención al cliente</p>
                <a href="tel:+593991005007">
                    <button
                        class="flex items-center justify-center mt-3 text-xl font-medium text-black transition-border"
                    >
                        <icons class="h-6 pr-2" :name="phone" />
                        0991005007
                    </button>
                </a>
                <p class="text-xl font-bold text-blue">Ventas</p>
                <a href="tel:+593967375007">
                    <button
                        class="flex items-center justify-center mt-3 text-xl font-medium text-black transition-border"
                    >
                        <icons class="h-6 pr-2" :name="phone" />
                        0967375007
                    </button>
                </a>
            </div>
            <!-- PRODUCTS  -->
            <div class="mt-12 md:mt-0">
                <Content :linkSection="linkSection" />
            </div>
            <!-- WE HELP YOU -->
            <div class="mt-12 md:mt-0">
                <Content :linkSection="linkSection2" />
            </div>
            <!-- EMPLOY -->
            <div class="mt-12 md:mt-0">
                <Content :linkSection="linkSection3" />
            </div>
            <!-- YOUR OPINION CARES -->
            <div class="mt-12 md:mt-0">
                <Content :linkSection="linkSection4" />
            </div>
        </div>
    </footer>
</template>

<script>
import Icons from '@/components/global/Icons.vue'
import Content from './Content/Footer/content.vue'
export default {
    components: {
        Icons,
        Content,
    },
    data: () => ({
        phone: 'phone',
        linkSection: {
            title: 'Productos',
            links: [
                {
                    name: 'Hogar',
                    url: 'https://localhost:3000/hola2',
                },
                {
                    name: 'Coorporativo',
                    url: 'https://localhost:3000/hola2',
                },
            ],
        },

        linkSection2: {
            title: 'Te ayudamos',
            links: [
                {
                    name: 'Test de velocidad',
                    url: 'https://localhost:3000/hola',
                },
                {
                    name: '¿Cuál es mi plan ideal',
                    url: 'https://localhost:3000/hola',
                },
                {
                    name: 'Formas de pago',
                    url: 'https://localhost:3000/hola',
                },
                {
                    name: 'Preguntas frecuentes',
                    url: 'https://localhost:3000/hola',
                },
            ],
        },
        linkSection3: {
            title: 'Empleo',
            links: [
                {
                    name: 'Trabaja con nosotros',
                    url: 'https://localhost:3000/hola2',
                },
            ],
        },
        linkSection3: {
            title: 'Tu opinión nos importa',
            links: [
                {
                    name: 'Sugerencias y Recomendaciones',
                    url: 'https://localhost:3000/hola2',
                },
            ],
        },
        linkSection4: {
            title: 'Normativas y regulaciones',
            links: [
                {
                    name: 'ARCOTEL',
                    url: 'https://localhost:3000/hola2',
                },
                {
                    name: 'CONTROL PARENTAL',
                    url: 'https://localhost:3000/hola2',
                },
                {
                    name: 'Políticas y privacidad',
                    url: 'https://localhost:3000/hola2',
                },
                {
                    name: 'Términos y condiciones',
                    url: 'https://localhost:3000/hola2',
                },
            ],
        },
    }),
}
</script>

<style scoped>
.transition-border {
    transition: 0.5s;
}
.transition-border:hover {
    border-bottom: 2px;
    color: #152f84;
}
</style>
