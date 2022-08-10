<template>
    <form class="flex flex-wrap w-4/5 mx-auto max-w-7xl justify-evenly">
        <!-- RUC SECTION  -->
        <div class="flex flex-col w-full pt-6 sm:w-2/5">
            <label
                for="RUC"
                class="text-base font-bold text-white font-principal"
            >
                Ruc.
            </label>
            <input
                id="ruc"
                type="number"
                v-model="ruc"
                required
                class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
                placeholder="Número de Ruc."
            />
        </div>
        <!-- NAME SECITON  -->
        <div class="flex flex-col w-full pt-6 sm:w-2/5">
            <label
                for="name"
                class="text-base font-bold text-white font-principal"
            >
                Nombre
            </label>
            <input
                id="name"
                type="text"
                v-model="name"
                required
                class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
                placeholder="Nombre de contácto"
            />
        </div>
        <!-- EMAIL SECTION  -->
        <div class="flex flex-col w-full pt-6 sm:w-2/5">
            <label
                for="email"
                class="text-base font-bold text-white font-principal"
            >
                Email
            </label>
            <input
                id="email"
                type="text"
                v-model="email"
                required
                class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
                placeholder="Ejemplo@mail.com"
            />
        </div>
        <!-- CELLPHONE SECTION  -->
        <div class="flex flex-col w-full pt-6 sm:w-2/5">
            <label
                for="cellNumber"
                class="text-base font-bold text-white font-principal"
            >
                Télefono
            </label>
            <input
                id="cellNumber"
                type="number"
                v-model="cellNumber"
                required
                class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
                placeholder="Número de contácto"
            />
        </div>
    </form>
</template>

<script>
export default {
    data: () => ({
        ruc: '',
        name: '',
        email: '',
        cellNumber: '',
    }),
}
</script>

<style scoped>
.background {
    background: transparent;
}
</style>
