<template>
	<div class="flex flex-wrap w-4/5 max-w-7xl justify-between">
		<!-- NAME SECTION  -->
		<div class="flex flex-col w-full pt-6 sm:w-2/5">
			<label for="ci" class="text-base font-bold text-white font-principal">
				Cédula
			</label>
			<input id="ci" type="text" v-model="applicant.ci" required
				class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
				placeholder="0987656778" />
		</div>
		<!-- NAME SECTION  -->
		<div class="flex flex-col w-full pt-6 sm:w-2/5">
			<label for="name" class="text-base font-bold text-white font-principal">
				Nombre
			</label>
			<input id="name" type="text" v-model="applicant.name" required
				class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
				placeholder="Jhon Doe" />
		</div>
		<!-- LASTNAME SECITON  -->
		<div class="flex flex-col w-full pt-6 sm:w-2/5">
			<label for="lastname" class="text-base font-bold text-white font-principal">
				Apellido
			</label>
			<input id="lastname" type="text" v-model="applicant.lastname" required
				class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
				placeholder="Nombre de contácto" />
		</div>
		<!-- EMAIL SECTION  -->
		<div class="flex flex-col w-full pt-6 sm:w-2/5">
			<label for="email" class="text-base font-bold text-white font-principal">
				Email
			</label>
			<input id="email" type="email" v-model="applicant.email" required
				class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
				placeholder="Ejemplo@mail.com" />
		</div>
		<!-- ADDRESS SECTION  -->
		<div class="flex flex-col w-full pt-6 sm:w-2/5">
			<label for="address" class="text-base font-bold text-white font-principal">
				Teléfono
			</label>
			<input id="address" type="text" v-model="applicant.phoneNumber" required
				class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
				placeholder="Dirección de domicilio" />
		</div>
		<!-- CELLPHONE SECTION  -->
		<div class="flex flex-col w-full pt-6 sm:w-2/5">
			<label for="phoneNumber" class="text-base font-bold text-white font-principal">
				Dirección
			</label>
			<input id="phoneNumber" type="text" v-model="applicant.address" required
				class="px-3 py-3 text-white border rounded-md outline-none border-yellow placeholder:text-grey background"
				placeholder="Dirección de domicilio" />
		</div>
		<div class="flex w-full my-2">
			<VacancyAddFile @image-response="getCvFile" />
		</div>
		<div class="flex w-full pt-6">
			<button class="mt-12 mr-4 rounded-lg py-1 px-2 text-white border border-white" @click="$emit('close-form')">
				Cerrar
			</button>
			<button class="mt-12 rounded-lg py-1 px-2 text-appBackground"
				:class="{ 'bg-yellow': formIsValid, 'bg-grey': !formIsValid }" :disabled="!formIsValid"
				@click.prevent="sendApplications">
				Enviar
			</button>
		</div>
	</div>
</template>

<script>
import { emailValidation } from '~/helpers/validation'
import VacancyAddFile from '../Cards/VacancyAddFile.vue'
import { mapActions } from 'vuex';

export default {
	props: {
		vacant: {
			type: String,
			required: true
		}
	},
	data: () => ({
		applicant: {
			ci: '',
			name: '',
			lastname: '',
			email: '',
			address: '',
			fileUrl: '',
			phoneNumber: '',
		},
	}),
	computed: {
		formIsValid() {
			return (this.applicant.name.length &&
				this.applicant.lastname.length &&
				!this.emailIsValid.length &&
				this.applicant.address.length) &&
				this.applicant.fileUrl.length &&
				this.applicant.ci.length
		},
		emailIsValid() {
			return this.applicant.email.length ? this.validatingEmail() : '';
		},
	},
	methods: {
		...mapActions('workWithUs', ['postApplication']),
		resetValues() {
			this.applicant = {
				ci: '',
				name: '',
				lastname: '',
				email: '',
				address: '',
				fileUrl: '',
				phoneNumber: ''
			};
		},
		validatingEmail() {
			return !emailValidation(this.applicant.email)
				? "Ingresa un correo válido"
				: "";
		},
		sendApplications() {
			const dataForm = {
				name: this.applicant.name,
				lastName: this.applicant.lastname,
				id: this.applicant.ci,
				email: this.applicant.email,
				address: this.applicant.address,
				phone: this.applicant.phoneNumber,
				url: this.applicant.fileUrl,
				vacant: this.vacant
			}
			this.postApplication(dataForm)

			this.$emit("close-form");
			this.$emit('vacant-sent')
			this.resetValues()
		},
		getCvFile(event) {
			this.applicant.fileUrl = event.url
		}
	},
	components: { VacancyAddFile }
}
</script>

<style scoped>
.background {
	background: transparent;
}
</style>
