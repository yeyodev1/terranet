<template>
    <form class="w-4/5 mx-auto max-w-7xl flex flex-wrap">
        <!-- RUC SECTION  -->
        <div class="flex flex-col w-full sm:w-2/5 pt-6">
            <label
                for="RUC"
                class="text-white font-principal font-bold text-base"
            >
                Ruc.
            </label>
            <input
                id="ruc"
                type="number"
                v-model="ruc"
                required
                class="py-3 px-3 border rounded-md text-white border-yellow placeholder:text-grey background outline-none"
                placeholder="Número de Ruc."
            />
        </div>
        <!-- NAME SECITON  -->
        <div class="flex flex-col w-full sm:w-2/5 pt-6">
            <label
                for="name"
                class="text-white font-principal font-bold text-base"
            >
                Name
            </label>
            <input
                id="name"
                type="text"
                v-model="name"
                required
                class="py-3 px-3 border rounded-md text-white border-yellow placeholder:text-grey background outline-none"
                placeholder="Nombre de contácto"
            />
        </div>
        <!-- EMAIL SECTION  -->
        <div class="flex flex-col w-full sm:w-2/5 pt-6">
            <label
                for="email"
                class="text-white font-principal font-bold text-base"
            >
                Email
            </label>
            <input
                id="email"
                type="text"
                v-model="email"
                required
                class="py-3 px-3 border rounded-md text-white border-yellow placeholder:text-grey background outline-none"
                placeholder="Ejemplo@mail.com"
            />
        </div>
        <!-- CELLPHONE SECTION  -->
        <div class="flex flex-col w-full sm:w-2/5 pt-6">
            <label
                for="cellNumber"
                class="text-white font-principal font-bold text-base"
            >
                Télefono
            </label>
            <input
                id="cellNumber"
                type="number"
                v-model="cellNumber"
                required
                class="py-3 px-3 border rounded-md text-white border-yellow placeholder:text-grey background outline-none"
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
