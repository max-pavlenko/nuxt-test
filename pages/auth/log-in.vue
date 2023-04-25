<template>
  <LoginForm/>
</template>

<script>
import LoginForm from '~/components/forms/LoginForm.vue';

export default {
  name: "log-in",
  middleware: ['clearAuthError'],
  components: {LoginForm}
};
</script>

<style scoped>
</style>
