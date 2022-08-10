<template>
    <div>
        <p
            class="px-5 pb-10 text-2xl font-bold text-center text-white font-principal pt-11"
        >
            ¿Cuántos dispositivos conectarás a la red?
        </p>
        <div class="flex flex-wrap w-4/5 mx-auto justify-evenly max-w-7xl">
            <div
                class="flex flex-col items-center justify-center px-3 mt-10 sm:mt-0"
            >
                <div>
                    <Icons class="w-12 h-8 text-white" :name="laptop" />
                </div>
                <p class="text-base text-center text-white font-principal">
                    Computadoras
                </p>
                <input
                    type="number"
                    class="h-12 px-2 py-3 text-center text-white border rounded-md outline-none border-yellow font-principal placeholder:font-principal placeholder:text-white placeholder:text-base background w-9 placeholder:text-center"
                    v-model="userComputers"
                    placeholder="0"
                />
            </div>
            <div
                class="flex flex-col items-center justify-center px-3 mt-10 sm:mt-0"
            >
                <div>
                    <Icons class="w-12 h-8 text-white" :name="tabletPhone" />
                </div>
                <p class="text-base text-center text-white font-principal">
                    Tablets/<br class="sm:hidden" />Smartphones
                </p>
                <input
                    type="number"
                    class="h-12 px-2 py-3 text-center text-white border rounded-md outline-none border-yellow font-principal placeholder:font-principal placeholder:text-white placeholder:text-base background w-9 placeholder:text-center"
                    v-model="userSmartDevices"
                    placeholder="0"
                />
            </div>
            <div
                class="flex flex-col items-center justify-center px-3 mt-10 sm:mt-0"
            >
                <div>
                    <Icons class="w-12 h-8 text-white" :name="television" />
                </div>
                <p class="text-base text-center text-white font-principal">
                    Smart TVs
                </p>
                <input
                    type="number"
                    class="h-12 px-2 py-3 text-center text-white border rounded-md outline-none border-yellow font-principal placeholder:font-principal placeholder:text-white placeholder:text-base background w-9 placeholder:text-center"
                    v-model="userTvs"
                    placeholder="0"
                />
            </div>
            <div
                class="flex flex-col items-center justify-center px-3 mt-10 sm:mt-0 sm:pt-4 md:pt-0"
            >
                <div>
                    <Icons class="w-12 h-8 text-white" :name="camera" />
                </div>
                <p class="text-base text-center text-white font-principal">
                    Cámaras<br class="sm:hidden" />/otros
                </p>
                <input
                    type="number"
                    class="h-12 px-2 py-3 text-center text-white border rounded-md outline-none border-yellow font-principal placeholder:font-principal placeholder:text-white placeholder:text-base background w-9 placeholder:text-center"
                    v-model="userCameras"
                    placeholder="0"
                />
            </div>
        </div>
        <div class="flex items-center justify-center w-4/5 mx-auto mt-14">
            <input type="checkbox" class="w-5 h-5" />
            <p class="pl-3 text-xs font-principal text-grey">
                Acepto las políticas de privacidad
            </p>
        </div>
        <div class="flex items-center justify-center w-full">
            <button
                class="flex items-center justify-center px-6 py-3 mb-6 text-center text-white border rounded-md font-principal mt-9 border-yellow sm:mb-12"
            >
                Enviar
            </button>
        </div>
    </div>
</template>

<script>
import Icons from '../global/Icons.vue'
export default {
    components: {
        Icons,
    },
    data: () => ({
        // ICONS
        tabletPhone: 'tabletPhone',
        laptop: 'laptop',
        television: 'television',
        camera: 'securityCamera',
        television: 'television',

        //USER DEVICES
        userComputers: '',
        userSmartDevices: '',
        userTvs: '',
        userCameras: '',
    }),
}
</script>

<style scoped>
.background {
    background: transparent;
}
</style>
