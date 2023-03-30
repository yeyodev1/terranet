
import AppLayout from '~/components/App/components/AppLayout.vue';

<template>
  <AppLayout>
    <AppTitle :title="'Correos electrónicos'" class="mt-4" />
    <div v-if="getEmails.length" class="w-full flex flex-col mt-6">
      <GetEmails v-for="(email, index) in emails" :key="index" :email="email" @email-changed="update" />
    </div>
  </AppLayout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppLayout from '~/components/App/components/AppLayout.vue';
import AppTitle from '~/components/App/components/AppTitle.vue';
import GetEmails from '~/components/App/components/GetEmails.vue';

export default {
  layout: 'app',
  components: {
    AppLayout,
    AppTitle,
    GetEmails
  },
  data: () => ({
    emails: []
  }),
  computed: {
    ...mapGetters('emails', ['getEmails'])
  },
  async mounted() {
    if (!this.getEmails.length) {
      await this.fetchEmails()
    }
    this.setEmails()
  },
  methods: {
    ...mapActions('emails', ['fetchEmails', 'updateEmails']),
    setEmails() {
      this.emails = JSON.parse(JSON.stringify(this.getEmails))
      return this.emails
    },
    update(value) {
      // const idx = this.emails.findIndex(email => email.subject === value.email)
      console.log('value', value)
      this.updateEmails({ ...value })
    }
  }
}
</script>