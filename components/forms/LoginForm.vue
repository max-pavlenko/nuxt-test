<template>
  <Modal :on-submit="handleSubmitForm" header-text="Log in">
    <template v-slot:formBody>
      <Input autocomplete="email" :value="email" type="email" label="Email" @input="onEmailChange"/>
      <Input autocomplete="current-password" :value="password" type="password"
             label="Password" @input="onPasswordChange"/>
      <b class="auth-error" v-if="authError">{{ authError }}</b>
    </template>

    <template v-slot:formActions>
      <Button :disabled="isLoading" type="submit">Log in</Button>
      <div>New? <NuxtLink class="text-blue-400" to="/auth/sign-up">Register</NuxtLink></div>
    </template>
  </Modal>
</template>

<script>
import Modal from '~/components/modals/Modal.vue';
import Input from '~/components/ui/Input.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Button from '~/components/ui/Button.vue';

export default {
  name: "LoginForm",
  components: {Button, Input, Modal},
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters({
      authError: "authentication/authError",
      isAuth: 'authentication/isAuthenticated',
    }),
  },

  methods: {
    ...mapActions({
      login: 'authentication/login',
      register: 'authentication/register',
    }),
    ...mapMutations({
      setIsAuthError: 'authentication/setAuthError',
    }),
    async handleSubmitForm() {
      this.isLoading = true;
      const credentials = {
        email: this.email,
        password: this.password
      };

      await this.login(credentials);
      this.isLoading = false;
      this.isAuth && await this.$router.push('/');
    },
    onEmailChange( value ) {
      this.email = value;
    },
    onPasswordChange( value ) {
      this.password = value;
    },
  },
};
</script>

<style scoped>

.auth-error {
  display: flex;
  margin-bottom: 10px;
}
</style>
