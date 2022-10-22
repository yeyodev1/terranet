<template>
    <div
        class="flex flex-wrap items-center justify-center w-full p-4 pb-12 border-b-2 border-white background-phoneCallToAction"
    >
        <div
            class="flex flex-col items-center justify-center w-4/5 mt-5 lg:w-1/2 max-w-7xl"
        >
            <p class="text-base text-white font-principal sm:text-2xl">
                !Vive la experiencia <strong>Terranet!</strong>
            </p>
            <p
                class="pr-10 text-xs font-medium text-white font-principal sm:text-base sm:pr-0 lg:pr-24"
            >
                Deja tu número <br class="sm:hidden lg:flex" />
                y nos comunicaremos contigo
            </p>
        </div>

        <div class="flex flex-wrap w-full lg:w-1/2 max-w-7xl">
            <div
                class="flex flex-col items-center justify-center w-full mx-auto my-6 lg:items-start md:w-1/3 sm:w-1/2"
            >
                <div
                    class="flex w-3/4 p-1 border border-white rounded-md lg:w-full"
                >
                    <div class="">
                        <p class="text-white">(+593)</p>
                    </div>
                    <label for="cellphone-numer">
                        <input
                            class="w-3/4 px-4 text-white lg:4/5 background focus:outline-none"
                            id="cellphone-numer"
                            type="number"
                            placeholder="_  _  _  _  _  _  _  _  _"
                        />
                    </label>
                </div>
                <div class="flex mt-2">
                    <input type="checkbox" />

                    <p class="text-xs text-white font-principal">
                        Acepto términos y condiciones
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-center w-full md:w-1/2">
                <button
                    class="p-2 text-xs font-semibold rounded-md lg:px-6 lg:py-3 lg:text-base h-fit font-principal hover:bg-yellow text-white hover:text-black border border-white"
                >
                    Llámenme
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background {
    background: transparent;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.background-phoneCallToAction {
    background-image: url('@/static/Backgrounds/Background-3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
