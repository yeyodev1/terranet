<template>
    <div class="w-full bg-black">
        <div
            class="flex flex-col items-center justify-center w-4/5 pt-10 mx-auto lg:flex-row sm:pt-20"
        >
            <p
                class="pr-3 text-2xl font-bold text-center text-white font-principal sm:text-5xl"
            >
                Beneficios de elegir
            </p>
            <p
                class="text-2xl font-bold text-center text-lightBlue font-principal sm:text-5xl"
            >
                Terranet
            </p>
        </div>
        <div
            class="flex flex-col items-center justify-center w-1/2 mx-auto lg:justify-between lg:w-4/5 lg:flex-row lg:pt-16 lg:pb-32 max-w-7xl"
        >
            <div class="flex flex-col items-center justify-center">
                <div class="pt-6 pb-4 sm:p-0">
                    <Wifi class="sm:hidden" />
                    <WifiTablet class="hidden sm:flex" />
                </div>
                <strong class="text-base text-white sm:text-2xl font-principal"
                    >100%</strong
                >
                <p class="text-white font-principal">Fibra óptica</p>
            </div>
            <div
                class="flex flex-col items-center justify-center mt-5 sm:mt-20 lg:mt-0"
            >
                <div>
                    <AccountVoice class="sm:hidden" />
                    <AccountVoiceTablet class="hidden sm:flex" />
                </div>
                <div>
                    <p
                        class="text-base font-bold text-center text-white sm:text-2xl"
                    >
                        Asistencia 24/7
                    </p>
                    <p class="text-center text-white font-principal">
                        Siempre contigo
                    </p>
                </div>
            </div>
            <div
                class="flex flex-col items-center justify-center mt-5 sm:mt-20 mb-7 sm:mb-16 lg:m-0"
            >
                <div>
                    <Gift class="sm:hidden" />
                    <GiftTablet class="hidden sm:flex" />
                </div>
                <p
                    class="text-base font-bold text-center text-white sm:text-2xl"
                >
                    Instalación
                </p>
                <p class="text-center text-white font-principal">
                    Gratis e inmediata
                </p>
                <p class="text-xs text-white font-principal">
                    Aplican condiciones
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Wifi from '../global/The/Svg/Wifi.vue'
import AccountVoice from '../global/The/Svg/AccountVoice.vue'
import WifiTablet from '../global/The/Svg/WifiTablet.vue'
import AccountVoiceTablet from '../global/The/Svg/AccountVoiceTablet.vue'
import Gift from '../global/The/Svg/Gift.vue'
import GiftTablet from '../global/The/Svg/GiftTablet.vue'

export default {
    components: {
        Wifi,
        AccountVoice,
        WifiTablet,
        AccountVoiceTablet,
        Gift,
        GiftTablet,
    },
}
</script>
