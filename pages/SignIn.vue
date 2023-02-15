<template>
    <div class="mx-auto w-full flex items-start min-h-screen bg-appBackground">
        <div class="w-full mx-auto flex flex-col items-center max-w-lg mt-10">
            <h1 class="text-white text-xl font-light mb-10">Iniciar Sesión</h1>
            <span
                v-if="getError.length"
                class="w-full flex justify-center items-center py-2 bg-red text-white my-4"
            >
                {{ getError }}
            </span>
            <div class="w-full mx-auto flex flex-col items-center">
                <div class="inputBox mb-7">
                    <input
                        v-model="credentials.email"
                        type="text"
                        autocomplete="off"
                        required
                    />
                    <span>Correo</span>
                    <p v-if="emailIsValid.length" class="text-yellow">
                        Ingresa un correo valido
                    </p>
                </div>
                <div class="inputBox mt-20">
                    <input
                        v-model="credentials.password"
                        type="password"
                        autocomplete="off"
                        required
                    />
                    <span>Constraseña</span>
                    <p v-if="passwordIsValid" class="text-yellow">
                        Ingresa un password valido
                    </p>
                </div>
            </div>
            <button
                class="mt-12 rounded-lg py-1 px-2 text-appBackground"
                :class="{ 'bg-yellow': formIsValid, 'bg-grey': !formIsValid }"
                :disabled="!formIsValid"
                @click="sendCredentials"
            >
                Iniciar Sesion
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppLayout from '~/components/App/components/AppLayout.vue'
import { emailValidation } from '@/helpers/validation'

export default {
    layout: 'clean',
    components: { AppLayout },
    data: () => ({
        credentials: {
            email: '',
            password: '',
        },
    }),
    computed: {
        ...mapGetters('user', ['getError']),
        emailIsValid() {
            return this.credentials.email.length ? this.validatingEmail() : ''
        },
        passwordIsValid() {
            return !this.credentials.password.length
                ? this.validatingPassword()
                : false
        },
        formIsValid() {
            return (
                !this.emailIsValid.length &&
                !this.passwordIsValid &&
                this.credentials.email.length &&
                this.credentials.password
            )
        },
    },
    methods: {
        ...mapActions('user', ['login']),
        sendCredentials() {
            const user = this.credentials
            this.login({ ...user })
        },
        validatingEmail() {
            return !emailValidation(this.credentials.email)
                ? 'Ingresa un correo válido'
                : ''
        },
        validatingPassword() {
            return this.credentials.password.length
        },
    },
}
</script>

<style scoped>
.inputBox {
    position: relative;
    width: 100%;
}
.inputBox input {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    background: #313646;
}
.inputBox span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    color: white;
    transition: 0.5s;
}
.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
    color: white;
    transform: translateX(10px) translateY(-16px);
    font-size: 0.85em;
}
.inputBox input:valid,
.inputBox input:focus {
    background: #313646;
}
input:-webkit-autofill,
input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
}
</style>
