<template>
  <Modal :on-submit="submitForm" header-text="Register">
    <template v-slot:formBody>
      <Input autocomplete="name" :value="name" label="Name" @input="onNameChange"/>
      <Input autocomplete="email" :value="email" type="email" label="Email" @input="onEmailChange"/>
      <Input autocomplete="current-password" :value="password" type="password"
             label="Password" @input="onPasswordChange"/>
      <b class="auth-error" v-if="authError">{{ authError }}</b>
    </template>

    <template v-slot:formActions>
      <Button :disabled="isLoading" type="submit">Register</Button>
      <div>Already registered? <NuxtLink class="text-blue-400" to="/auth/log-in">Login</NuxtLink></div>
    </template>
  </Modal>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import Modal from '~/components/modals/Modal.vue';
import Input from '~/components/ui/Input.vue';
import Button from '~/components/ui/Button.vue';

export default {
  name: "SignupForm",
  components: {Button, Input, Modal},
  data() {
    return {
      email: '',
      password: '',
      name: '',
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
    async submitForm() {
      this.isLoading = true
      const credentials = {
        email: this.email,
        password: this.password,
        name: this.name,
      };

      await this.register(credentials);
      this.isLoading = false;
      this.isAuth && await this.$router.push('/');
    },
    onNameChange( value ) {
      this.name = value;
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

</style>
