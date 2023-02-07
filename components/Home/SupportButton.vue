<template>
    <div class="message fixed z-50 right-5 sm:right-16 -bottom-40 rounded-lg">
        <div
            class="p-4 rounded-lg message-button bg-yellow flex justify-center items-center mb-3"
        >
            <Icons class="w-5 h-5" :name="message" />
        </div>
        <div class="message-options">
            <a
                href="https://www.facebook.com/messages/t/111849641352264"
                target="_blank"
            >
                <div class="p-4 rounded-lg bg-yellow text-[#335BDE]">
                    <Icons class="w-5 h-5" :name="messenger" />
                </div>
            </a>
            <a href="https://www.instagram.com/terranet.ec/" target="_blank">
                <div class="p-4 rounded-lg bg-yellow my-4 text-[#AA0047]">
                    <Icons class="w-5 h-5" :name="instagram" />
                </div>
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=593967377000&text=%C2%A1Hola!%20Vi%20tu%20perfil%[…]20y%20estoy%20interesado%20en%20un%20plan%20de%20internet%20"
                target="_blank"
            >
                <div class="p-4 rounded-lg bg-yellow text-[#00A441]">
                    <Icons class="w-5 h-5" :name="whatsapp" />
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import Icons from '../global/Icons.vue'

export default {
    components: { Icons },
    data: () => ({
        message: 'message',
        messenger: 'messenger',
        instagram: 'instagram',
        whatsapp: 'whatsapp',
    }),
}
</script>

<style scoped>
.message:hover > .message-button {
    animation: fade 250ms linear forwards, moveUp 250ms linear forwards;
}

.message-options {
    opacity: 0;
}

.message:hover > .message-options {
    animation: faderev 250ms linear forwards, moveUp 250ms linear forwards;
}
@keyframes fade {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@keyframes faderev {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes moveUp {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-200px);
    }
}
</style>
